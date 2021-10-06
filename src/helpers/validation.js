import {
        extend
} from 'vee-validate';
import {
        required,
        digits,
        email,
        max,
        regex
} from "vee-validate/dist/rules";

        function validateIBAN(input) {
                return isValidIBANNumber(input)
        /*
         * Returns 1 if the IBAN is valid 
         * Returns FALSE if the IBAN's length is not as should be (for CY the IBAN Should be 28 chars long starting with CY )
         * Returns any other number (checksum) when the IBAN is invalid (check digits do not match)
         */
        function isValidIBANNumber(input) {
                var CODE_LENGTHS = {
                        AD: 24,
                        AE: 23,
                        AT: 20,
                        AZ: 28,
                        BA: 20,
                        BE: 16,
                        BG: 22,
                        BH: 22,
                        BR: 29,
                        CH: 21,
                        CR: 21,
                        CY: 28,
                        CZ: 24,
                        DE: 22,
                        DK: 18,
                        DO: 28,
                        EE: 20,
                        ES: 24,
                        FI: 18,
                        FO: 18,
                        FR: 27,
                        GB: 22,
                        GI: 23,
                        GL: 18,
                        GR: 27,
                        GT: 28,
                        HR: 21,
                        HU: 28,
                        IE: 22,
                        IL: 23,
                        IS: 26,
                        IT: 27,
                        JO: 30,
                        KW: 30,
                        KZ: 20,
                        LB: 28,
                        LI: 21,
                        LT: 20,
                        LU: 20,
                        LV: 21,
                        MC: 27,
                        MD: 24,
                        ME: 22,
                        MK: 19,
                        MR: 27,
                        MT: 31,
                        MU: 30,
                        NL: 18,
                        NO: 15,
                        PK: 24,
                        PL: 28,
                        PS: 29,
                        PT: 25,
                        QA: 29,
                        RO: 24,
                        RS: 22,
                        SA: 24,
                        SE: 24,
                        SI: 19,
                        SK: 24,
                        SM: 27,
                        TN: 24,
                        TR: 26,
                        AL: 28,
                        BY: 28,
                        CR: 22,
                        EG: 29,
                        GE: 22,
                        IQ: 23,
                        LC: 32,
                        SC: 31,
                        ST: 25,
                        SV: 28,
                        TL: 23,
                        UA: 29,
                        VA: 22,
                        VG: 24,
                        XK: 20
                };
                var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
                        code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
                        digits;
                // check syntax and length
                if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
                        return false;
                }
                // rearrange country code and check digits, and convert chars to ints
                digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
                        return letter.charCodeAt(0) - 55;
                });
                // final check
                return mod97(digits);
        }

        function mod97(string) {
                var checksum = string.slice(0, 2),
                        fragment;
                for (var offset = 2; offset < string.length; offset += 7) {
                        fragment = String(checksum) + string.substring(offset, offset + 7);
                        checksum = parseInt(fragment, 10) % 97;
                        if (checksum == 1) {
                                return true;
                        }else{
                                return false;
                        }

                }
                
        };

};

function validateDNI(dni) {
        const dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        if (dni.length == 9) {
                let letter = dni_letters.charAt(parseInt(dni, 10) % 23)
                return letter == dni.charAt(8);
        }

        return false;
};

function validateNIE(nie) {
        let nie_prefix = nie.charAt(0);
        switch (nie_prefix) {
                case "X":
                        nie_prefix = 0;
                        break;
                case "Y":
                        nie_prefix = 1;
                        break;
                case "Z":
                        nie_prefix = 2;
                        break;
        }
        return validateDNI(nie_prefix + nie.substr(1));
}

function validateCIF(cif) {
        const CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
        if (CIF_REGEX.test(cif)) {
                const match = cif.match(CIF_REGEX);
                const letter = match[1],
                        number = match[2],
                        control = match[3];

                let even_sum = 0;
                let odd_sum = 0;
                let n;

                for (let i = 0; i < number.length; i++) {
                        n = parseInt(number[i], 10);

                        // Odd positions (Even index equals to odd position. i=0 equals first position)
                        if (i % 2 === 0) {
                                // Odd positions are multiplied first.
                                n *= 2;

                                // If the multiplication is bigger than 10 we need to adjust
                                odd_sum += n < 10 ? n : n - 9;

                                // Even positions
                                // Just sum them
                        } else {
                                even_sum += n;
                        }
                }

                const control_digit = 10 - (even_sum + odd_sum).toString().substr(-1);
                const control_letter = "JABCDEFGHI".substr(control_digit, 1);

                // Control must be a digit
                if (letter.match(/[ABEH]/)) {
                        return control == control_digit;

                        // Control must be a letter
                } else if (letter.match(/[KPQS]/)) {
                        return control == control_letter;

                        // Can be either
                } else {
                        return control == control_digit || control == control_letter;
                }
        }
}

extend('DocValido', (Documento, values) => {

        if (values[0] == 'DNI') {
                return validateDNI(Documento)
        }

        if (values[0] == 'NIE') {
                return validateNIE(Documento)
        }

        if (values[0] == 'CIF') {
                return validateCIF(Documento)
        }
});

extend("ibanCheck", (iban) => {
        if (iban.length == 29) {
                return validateIBAN(iban);
        } else {
                return false, "Debe escribir un IBAN válido";
        }
});
extend("radioInput", (radio) => {
        if (radio !== null) {
                return true;
        } else {
                return false, "Debe seleccionar alguno";
        }
});

extend("digits", {
        ...digits,
        message: "{_field_} tiene que ser de {length} dígitos ({_value_})",
});

extend("required", {
        ...required,
        message: "{_field_} no puede estar vacío",
});

extend("max", {
        ...max,
        message: "El {_field_} no debe ser superior a {length} carácteres",
});

extend("regex", {
        ...regex,
        message: "{_value_} no es válido1",
});

extend("email", {
        ...email,
        message: "El Email debe ser válido",
});