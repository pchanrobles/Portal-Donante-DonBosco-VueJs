<template>
  <div id="app">
    <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" id="inspire">
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <h3 class="headline">
                    <div>
                      <h4 class="donante">PORTAL DEL DONANTE</h4>
                      <v-img
                        class="bosco"
                        src="@/assets/bosco.png"
                        alt="imagen Don bosco"
                      ></v-img>
                    </div>
                  </h3>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Inicie sesión</p>

                <v-form>
                  <v-text-field
                    outline
                    label="Documento de Identificación"
                    type="text"
                    v-model="documento"
                  ></v-text-field>

                  <v-text-field
                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show3 ? 'text' : 'password'"
                    label="Contraseña"
                    hint="Debe contener al menos 4 carácteres"
                    class="input-group--focused"
                    @click:append="show3 = !show3"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions
                class="justify-content-center"
                :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
              >
                <div class="box" >
                  <div class="chekboxBtn">
                    <v-checkbox
                      label="Recordar contraseña"
                      class="d-flex justify-content-center"
                    ></v-checkbox>

                    <v-btn
                      @click="login()"
                      color="info"
                      :large="$vuetify.breakpoint.smAndUp"
                    >
                      Entrar
                    </v-btn>
                  </div>

                  <div
                    width="100%"
                    class=" red lighten-4 rounded d-flex justify-content-center"
                  >
                    <v-dialog v-model="dialog" width="600px">
                      <v-card>
                        <v-card-title>
                          <span class="text-h7 text-black"
                            >Política de Privacidad</span
                          >
                        </v-card-title>
                        <v-card-text>
                          <span class="text-h5 font-weight-bold primary--text"
                            >AVISO LEGAL</span
                          >
                          <br /><br />
                          Datos del titular de la página. De conformidad con lo
                          establecido en la Ley 34/2.002 de Servicios de la
                          Sociedad de la Información y de Comercio Electrónico y
                          en el Reglamento (UE) 2016/679 del Parlamento Europeo
                          y del Consejo, de 27 de abril de 2016, relativo a la
                          protección de las personas físicas en lo que respecta
                          al tratamiento de datos personales y a la libre
                          circulación de estos datos, se informa que la
                          Fundación Don Bosco Salesianos Social es el titular
                          del sitio web accesible en la dirección URL
                          <a href="https://fundaciondonbosco.es" target="_blank"
                            >https://fundaciondonbosco.es</a
                          >
                          (en adelante sitio web), la dirección de correo
                          electrónico es
                          <a
                            href="mailto:fundacion@fundaciondonbosco.es"
                            target="_blank"
                            >fundacion@fundaciondonbosco.es</a
                          >, con teléfono +34 957 475 267 y domicilio en Calle
                          San Francisco de Sales nº 1 – 14010 Córdoba.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Condiciones Generales Uso de la web</span
                          >
                          <br /><br />
                          Las presentes condiciones generales regulan el uso de
                          los sitios Web de Internet que esta entidad pone a su
                          disposición como usuario. La utilización del Sitio Web
                          supone la aceptación plena por el Usuario de todas las
                          Condiciones Generales de Uso del Sitio Web vigentes,
                          en cada momento en que el usuario acceda al mismo, por
                          lo que si éste no está de acuerdo con cualquiera de
                          las condiciones aquí establecidas, no deberá usar este
                          Sitio Web. La fundación se reserva el derecho de
                          modificar en cualquier momento las presentes
                          Condiciones Generales de Uso del Sitio Web,
                          notificándolo a los usuarios con antelación
                          suficiente, así como cualesquiera otras condiciones
                          generales o particulares, reglamentos de uso,
                          instrucciones o avisos que resulten de aplicación, con
                          el fin de mejorar los servicios ofrecidos. Asimismo,
                          se reserva el derecho de suspender, interrumpir o
                          dejar de operar el Sitio Web en cualquier momento.
                          Mediante la modificación de las Condiciones Generales
                          publicadas en dicha página web entenderá por cumplido
                          dicho deber de notificación. Por lo tanto,
                          recomendamos la visualización previa del Aviso Legal
                          para conocer las condiciones de acceso, uso y
                          utilización del correspondiente web-site. El objeto de
                          la Web es prestar los servicios solicitados así como
                          facilitar el acceso a la información, actividades,
                          proyectos y servicios que realiza esta fundación o en
                          la que ésta participa. El acceso al portal a través de
                          la dirección URL
                          <a href="https://fundaciondonbosco.es" target="_blank"
                            >https://fundaciondonbosco.es</a
                          >
                          tiene carácter gratuito para los usuarios y su
                          visualización no requiere de previa suscripción o
                          registro. Las personas usuarias responderán por los
                          daños y perjuicios de cualquier naturaleza producidos
                          como consecuencia directa o indirecta, del
                          incumplimiento de las condiciones establecidas en el
                          correspondiente aviso legal. <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Propiedad intelectual e Industrial</span
                          >
                          <br /><br />
                          El código fuente, los diseños gráficos, imágenes,
                          fotografías, sonidos, animaciones, software, textos,
                          así como la información y, en definitiva, los
                          elementos contenidos en la página Web están protegidos
                          por la legislación española sobre los derechos de
                          propiedad intelectual e industrial a favor de
                          Fundación Don Bosco. En todo caso, el usuario podrá
                          visualizarlos y utilizarlos para uso personal,
                          quedando prohibida su utilización con fines
                          comerciales y, en consecuencia, no estando permitida
                          la reproducción y/o publicación, total o parcial, ni
                          su tratamiento informático, distribución, difusión,
                          modificación, transformación o descompilación, etc.,
                          sin el permiso previo y por escrito del titular.
                          Cuando se autorice la reproducción deberá indicarse la
                          procedencia de la información.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Medidas técnicas y organizativas</span
                          >
                          <br /><br />
                          Fundación Don Bosco ha adoptado las medidas técnicas y
                          organizativas conforme a lo dispuesto en la normativa
                          vigente; siendo los niveles de seguridad los adecuados
                          a los datos que se facilitan y, además, se han
                          instalado todos los medios y medidas técnicas a su
                          alcance para evitar la pérdida, mal uso, alteración y
                          acceso no autorizado a los datos que nos facilitan.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Exención de responsabilidad</span
                          >
                          <br /><br />
                          El presente sitio Web ofrece información de las
                          actividades y/o servicios que presta la fundación e
                          información de utilidad para los usuarios/as y para la
                          sociedad en general. Dicha información es de carácter
                          general, no aborda circunstancias específicas
                          relativas a personas y organismos concretos. La
                          fundación considera esencial el fomento del acceso del
                          público a la información contenida en este Sitio Web
                          y, por ello, pone todo su interés en la puesta al día
                          del mismo tratando de corregir los errores que les
                          sean señalados, a fin de que la información que
                          contiene sea de utilidad para las personas
                          interesadas. Los contenidos incorporados al sitio Web
                          han sido elaborados, en todo momento, de buena fe con
                          el propósito de dar información a las personas
                          usuarias por lo que la fundación no asume ningún tipo
                          de responsabilidad respecto a la integridad o
                          exactitud de la citada información ni garantiza la
                          exactitud ni la puesta al día de la información que
                          puede obtener del mismo, la cual podrá ser modificada
                          sin previo aviso. Tampoco se responsabiliza de los
                          eventuales errores tipográficos, formales o numéricos
                          que pueda contener el sitio Web. Esta fundación no se
                          hace responsable de cualquier pérdida, directa o
                          indirecta, irrogada como consecuencia de decisiones
                          adoptadas en base a la información disponible en la
                          Web de su titularidad, dado que por demás, la misma,
                          así como sus contenidos pueden ser variados,
                          modificados y/o suprimidos en cualquier momento sin
                          necesidad legal de previo aviso. Así mismo, no se hace
                          responsable de los posibles daños que se podrían
                          derivar de interferencias, omisiones, interrupciones,
                          virus informáticos, averías telefónicas o
                          desconexiones en el funcionamiento operativo de los
                          sistemas electrónicos o informáticos, motivadas por
                          causas ajenas al titular de esta página web, de los
                          retrasos o bloqueos en el uso de dichos sistemas
                          causados por deficiencias o sobrecargas de líneas
                          telefónicas, sobrecargas en el sistema de Internet, o
                          en otros sistemas electrónicos. Esta página web tiene
                          enlaces y conexiones con otros lugares y páginas web
                          de carácter institucional sin que por ellos la entidad
                          pueda responder de la calidad, exactitud y veracidad
                          de los contenidos de las mismas por lo que no se hace
                          responsable de cualquier pérdida, directa o indirecta,
                          irrogada como consecuencia de decisiones adoptadas en
                          base a la información disponible en las citadas
                          páginas. La presencia de estos enlaces en nuestra
                          página web tiene una finalidad informativa, no
                          constituyendo en ningún caso una invitación o
                          recomendación a la contratación de productos o
                          servicios que se ofrezcan en el sitio de Internet de
                          destino, y en ningún caso implican el apoyo a las
                          personas o entidades autoras de tales contenidos o
                          titulares de los sitios donde se encuentran. De esta
                          manera, la entidad no se responsabiliza del contenido
                          y disponibilidad de los sitios web a los que enlaza
                          fuera de su página, de cualquier daño o pérdida que
                          pueda surgir por la conexión por el uso de cualquier
                          contenido, producto o servicios disponibles en los
                          sitios web a los que se dirijan los enlaces.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Comunicaciones a las personas usuarias</span
                          >
                          <br /><br />
                          Fundación Don Bosco es contraria a la práctica del
                          SPAM (envío masivo y continuado de mensajes al correo
                          electrónico no solicitados), normalmente comercial a
                          personas con las cuales no se ha mantenido relación
                          alguna, o hayan mostrado su deseo de no recibir
                          información a su correo electrónico. Por el hecho de
                          ser socio de la entidad, ésta le podrá comunicar sus
                          novedades, nuevos servicios y actividades, ayudas,
                          subvenciones, y formaciones que puedan ser de su
                          interés. En el caso de que usted decidiese no querer
                          recibir información (comercial) póngase en contacto
                          con nosotros para mostrar su no conformidad a la
                          recepción de las comunicaciones.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Legislación aplicable y Tribunales
                            competentes</span
                          >
                          <br /><br />
                          La legislación aplicable es la española y se declara
                          jurisdicción competente para la resolución de
                          cualquier tipo de controversia que se pudiera derivar
                          de la utilización de esta Web así como de la
                          contratación que se pudiera realizar a través de ella
                          a los Juzgados y Tribunales de Córdoba.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >POLÍTICA DE PRIVACIDAD EN LA WEB</span
                          >
                          <br /><br />
                          Fundación Don Bosco en un claro compromiso con el
                          cumplimiento normativo referido a la protección de los
                          datos de carácter personal en relación a los
                          usuarios/as y/o ciudadanos/as en general, desea
                          manifestar que los datos personales serán tratados con
                          el respeto y la diligencia debida tanto al Reglamento
                          (UE) 2016/679, del Parlamento Europeo y del Consejo,
                          de 27 de abril de 2016, relativo a la protección de
                          las personas físicas en lo que respecta al tratamiento
                          de datos personales y a la libre circulación de estos
                          datos, como a la Ley Orgánica 3/2018, de 5 de
                          diciembre, de Protección de Datos Personales y
                          garantía de los derechos digitales. Igualmente,
                          adaptaremos y actualizaremos la presente política de
                          privacidad a medida que vaya surgiendo cualquier
                          novedad legislativa o jurisprudencial. A continuación,
                          le indicamos en detalle los tratamientos de datos
                          personales que realizamos, así como toda la
                          información relativa a los mismos.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >Información básica sobre Protección de Datos</span
                          >
                          <br /><br />
                          Responsable del tratamiento: FUNDACIÓN DON BOSCO con
                          CIF: B-93387090
                          <br /><br />
                          Dirección: en Calle San Francisco de Sales, Nº 1, C.P
                          14010 de Córdoba.
                          <br /><br />
                          Correo electrónico:
                          <a
                            href="mailto:protecciondatos@fundaciondonbosco.es"
                            target="_blank"
                            >protecciondatos@fundaciondonbosco.es</a
                          >
                          <br /><br />
                          Datos de contacto del DPD: ABLA ABOGADOS
                          <br /><br />
                          Dirección: en Calle Cruz Conde, Nº 11, 1º Izquierda,
                          C.P. 14008 de Córdoba.
                          <br /><br />
                          Correo electrónico:
                          <a
                            href="mailto:protecciondatos@fundaciondonbosco.es"
                            target="_blank"
                            >despacho@abla-abogados.com</a
                          >
                          <br /><br />
                          Finalidad: Gestión y archivo de los datos de las
                          personas usuarias para la prestación del servicio
                          solicitado. Conocimiento por los usuarios de las
                          actividades que realiza la fundación y de los
                          servicios que se prestan en su centro. Legitimación:
                          obligaciones legales, interés legítimo y cumplimiento
                          de intereses públicos o consentimiento del interesado.
                          <br /><br />
                          Destinatarios: El responsable solo comunicará sus
                          datos con el consentimiento del titular de los mismos,
                          o en su defecto, en cumplimiento de obligaciones
                          legales.
                          <br /><br />
                          Derechos: El interesado podrá acceder, rectificar y
                          suprimir los datos, así como revocar la autorización
                          para el tratamiento de los mismos, y ejercitar los
                          restantes derechos de limitación, portabilidad tal y
                          como se indica en la información adicional de la
                          política de protección de datos.
                          <br /><br />
                          <span class="text-h5 font-weight-bold primary--text"
                            >Información adicional sobre la Política de
                            Protección de Datos</span
                          >
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >1. ¿Quién es el responsable del tratamiento de sus
                            datos?</span
                          >
                          <br /><br />
                          <span class="font-weight-bold text-black"
                            >Datos de contacto del responsable del
                            tratamiento:</span
                          >
                          <br />
                          Identidad: FUNDACIÓN DON BOSCO con CIF: B-93387090
                          <br />
                          Dirección: Calle San Francisco de Sales, Nº 1, C.P
                          14010 de Córdoba.
                          <br />
                          Teléfono: +34 957 475 267
                          <br />
                          Coreo electrónico:
                          <a
                            href="mailto:protecciondatos@fundaciondonbosco.es"
                            target="_blank"
                            >protecciondatos@fundaciondonbosco.es</a
                          >
                          <br /><br />
                          <span class="font-weight-bold text-black"
                            >Datos de contacto del Delegado de Protección de
                            Datos – DPD:</span
                          >
                          Identidad: ABLA ABOGADOS Dirección: Calle Cruz Conde,
                          Nº 11, 1º Izquierda, C.P. 14008 de Córdoba. Correo
                          electrónico:
                          <a
                            href="mailto:protecciondatos@fundaciondonbosco.es"
                            target="_blank"
                            >despacho@abla-abogados.com</a
                          >
                          <br /><br />

                          <span class="text-h6 font-weight-bold primary--text"
                            >2. ¿Con que finalidad tratamos sus datos
                            personales?</span
                          >
                          <br /><br />

                          Tratamos la información que nos facilita de acuerdo a
                          las finalidades principales en cumplimiento con
                          obligaciones derivadas de la prestación del servicio
                          solicitado, obligaciones legales, intereses públicos o
                          por interés legítimo o, en defecto de lo anterior, en
                          base a su consentimiento, cuyo fin sea:
                          <br /><br />
                          <ul>
                            <li>
                              La adecuada organización y/o prestación y/o
                              difusión de los servicios ofrecidos por la
                              fundación, la gestión económica y administrativa
                              del servicio así como la organización,
                              distribución de programas y promoción de servicios
                              y productos de la entidad.
                            </li>
                            <li>
                              Informar de las actividades, proyectos, servicios,
                              que se ofrecen y desarrollan, así como la manera
                              para formar parte y cuáles son los fines de la
                              fundación.
                            </li>
                            <li>
                              Contratación y abono de los cursos que se realizan
                              por la fundación o por sus miembros o en las que
                              ésta participa.
                            </li>
                          </ul>
                          No realizamos ningún tipo de decisión automatizada en
                          base a los datos suministrados ni tampoco elaboramos
                          perfil alguno con los mismos.
                          <br /><br />
                          Plazos de conservación de los datos. Los datos
                          proporcionados se conservarán mientras se mantenga la
                          relación con la fundación o durante los años
                          necesarios para cumplir con las obligaciones legales
                          y/o depurar responsabilidades con la administración.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >3. ¿Por cuánto tiempo conservaremos sus
                            datos?</span
                          >
                          <br /><br />
                          Además de lo anterior, se conservarán durante el
                          tiempo necesario para cumplir con la finalidad para la
                          que se recabaron y para determinar las posibles
                          responsabilidades que se pudieran derivar de dicha
                          finalidad y del tratamiento de los datos. Los datos
                          personales de las personas usuarias de esta actividad
                          se conservarán según la normativa de protección de
                          datos, es decir, el tiempo necesario para garantizar
                          la finalidad del tratamiento y posteriormente, se
                          conservarán debidamente bloqueados, a disposición
                          exclusiva de Jueces y Tribunales, Ministerio Fiscal o
                          Administraciones Públicas competentes, para poder
                          atender posibles responsabilidades hasta finalizar los
                          plazos de prescripciones legales establecidos en la
                          normativa vigente.
                          <br />
                          Las obligaciones derivadas del contrato – 5 años –
                          obligaciones de carácter fiscal – 4 años – y
                          obligaciones contables – 6 años -.
                          <br /><br />

                          <span class="text-h6 font-weight-bold primary--text"
                            >4. ¿Cuál es la legitimación para el tratamiento de
                            sus datos?</span
                          >
                          <br /><br />

                          La base de legitimación para el tratamiento de sus
                          datos es la condición de ser persona usuaria.
                          <br />
                          Asimismo, para el envío de comunicaciones o
                          información las actividades, servicios o eventos de la
                          fundación que pudieran ser de su interés, y que no se
                          correspondan con el cumplimiento de obligaciones
                          contractuales, legales, ni para garantizar intereses
                          públicos o legítimos de la entidad será el
                          consentimiento del usuario/a afectado, sin que en
                          ningún caso la retirada de este consentimiento
                          condicione el tratamiento de los datos en base a las
                          obligaciones legales.
                          <br />
                          Le informamos que para el tratamiento de los datos que
                          requieran de su consentimiento como aquellos que no
                          sean necesarios para dar cumplimiento a obligaciones
                          contractuales, estatutaria o legales, para garantizar
                          intereses públicos, vitales o legales o para tratar
                          los datos en base a intereses legítimos debidamente
                          ponderados por no vulnerar derechos y libertades de
                          las personas interesadas, en cualquier momento pueden
                          modular y revocar el consentimiento para estos
                          tratamientos, a través de la comunicación a esta
                          entidad enviando un mail a la dirección anteriormente
                          indicada.
                          <br />
                          No se tomarán decisiones automatizadas sobre la base
                          de este perfil sin su consentimiento previo e
                          informado en los supuestos en los que la base de
                          legitimación sea su consentimiento.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >5. ¿Quiénes son los destinatarios de sus
                            datos?</span
                          >
                          <br /><br />
                          Los datos facilitados podrán comunicarse a las
                          Administraciones Públicas y/o privadas para el
                          cumplimento de una obligación legal en caso de ser
                          necesario, a las entidades vinculadas o relacionadas
                          con esta fundación así como a sus colaboradores para
                          participar, organizar e impartir proyectos o
                          actividades en las que interviene la entidad, a las
                          entidades públicas o privadas que financien proyectos
                          de la fundación para justificar las subvenciones y
                          ayudas que reciba la entidad.
                          <br />
                          Los datos personales, facilitados consistentes en
                          nombre, apellidos, teléfono y email no serán
                          facilitados a terceros salvo que se haya informado al
                          usuario con carácter previo de la posible existencia
                          de cesiones de sus datos a terceros, y se haya
                          recabado su consentimiento a las mismas, en ningún
                          caso, salvo los casos amparados por la legislación
                          vigente, ningún tercero ajeno al responsable tendrá
                          acceso sin el consentimiento expreso de los usuarios,
                          a sus datos personales y/o de navegación.
                          <br />
                          No realizamos transferencias internacionales de datos.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >6. ¿Cuáles son las categorías de datos que se
                            tratan?</span
                          >
                          <br /><br />
                          Los datos que puede tratar el responsable de
                          trabamiento incluyen las siguientes categorías: datos
                          de identificación, dirección postal o electrónica,
                          información comercial, datos económicos y
                          administrativos, circunstancias sociales, datos
                          académicos y profesionales, datos financieros y de
                          salud en el caso de ser necesario para prestación del
                          servicio siempre previo consentimiento del
                          interesado/a o su representante legal.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >7. ¿Qué derechos tiene cuando nos facilita sus
                            datos?</span
                          >
                          <br /><br />
                          Las personas interesadas tienen derecho a acceder a
                          sus datos personales, así como a solicitar la
                          rectificación de los datos inexactos o, en su caso,
                          solicitar su supresión cuando, entre otros motivos,
                          los datos ya no sean necesarios para los fines que
                          fueron recogidos. Igualmente tiene derecho a la
                          portabilidad de sus datos.
                          <br />
                          En determinadas circunstancias, los interesados podrán
                          solicitar la limitación del tratamiento de sus datos.
                          En este caso, únicamente los conservaremos para el
                          ejercicio o la defensa de reclamaciones.
                          <br />
                          Al igual que en determinadas circunstancias y por
                          motivos relacionados con su situación particular, los
                          interesados podrán oponerse al tratamiento de sus
                          datos; y la entidad dejará de tratar los datos,
                          excepto por motivos legítimos imperativos, o el
                          ejercicio o la defensa de posibles reclamaciones.
                          <br />
                          Los interesados podrán solicitar la portabilidad de
                          sus datos en soporte automatizado a otro responsable
                          en los supuestos de tratamiento que permita el RGPD.
                          <br />
                          En el momento de la cancelación de los datos,
                          únicamente los conservaremos bloqueados en
                          cumplimiento de las obligaciones legales.
                          <br />
                          En caso de que sienta vulnerados sus derechos en lo
                          concerniente a la protección de sus datos personales,
                          especialmente cuando no haya obtenido satisfacción en
                          el ejercicio de sus derechos, puede presentar una
                          reclamación ante la Autoridad de Control en materia de
                          Protección de Datos competente a través de su sitio
                          web: www.aepd.es.
                          <br />
                          Los datos que ha facilitado se tratarán por la entidad
                          de acuerdo con las finalidades descritas en esta
                          política de privacidad, y en este sentido, se le
                          informa que podrá ejercer sus derechos de acceso,
                          rectificación o supresión, o la limitación a su
                          tratamiento, y a oponerse al tratamiento, así como el
                          derecho a la portabilidad de los datos, acreditando su
                          identidad mediante fotocopia del DNI, y remitiendo un
                          email a la dirección.
                          protecciondatos@fundaciondonbosco.es o mediante una
                          solicitud presencial en la sede de esta fundación.
                          Cuando se realice el envío de comunicaciones
                          comerciales utilizando como base jurídica el interés
                          legítimo del responsable, el interesado podrá oponerse
                          al tratamiento de sus datos con ese fin.
                          <br />
                          Si ha otorgado su consentimiento para alguna finalidad
                          concreta, tiene derecho a retirar el consentimiento
                          otorgado en cualquier momento, sin que ello afecte a
                          la licitud del tratamiento basado en el consentimiento
                          previo a su retirada.
                          <br /><br />
                          <span class="text-h6 font-weight-bold primary--text"
                            >8. ¿Cómo hemos obtenido sus datos?</span
                          >
                          <br /><br />
                          Los datos personales que tratamos proceden de los
                          propios interesados en el momento del acceso como
                          socio de esta fundación o cumplimentar un formulario a
                          través de nuestra web.
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            class="primary--text text-h6"
                            width="100%"
                            text
                            @click="redirectToRegister"
                          >
                            ACEPTAR
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                  <v-btn @click="redirectToForgot" color="info" text>
                    ¿Se te olvidó tu contraseña?
                  </v-btn>
                  <v-btn @click="dialog = true" color="info" text>
                    Registrarse
                  </v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex sm12 md6 offset-md3>
            <v-layout align-center justify-space-between> </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#DC001B",
        secondary: "#FFFFFF",
        accent: "#000",
        error: "#b71c1c",
        info: "#DC001B",
        success: "#27A73B",
        warning: "#FFC107",
      },
    },
  },
});
export default {
  data() {
    return {
      dialog: false,
      password: "",
      documento: "",
      show3: false,
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (v) => v.length >= 4 || "Minimo 4 carácters",
        emailMatch: () => `El email o la contraseña no coinciden`,
      },
    };
  },
  methods: {
    login() {
      let data = {
        documento: this.documento,
        password: this.password,
      };

      AuthService.login(data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("TokenFIRE", res.data.token);
          localStorage.setItem("Usuario", res.data.usuario.name);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    redirectToForgot() {
      this.$router.push({
        path: "/forgot",
      });
    },
    redirectToRegister() {
        this.$router.push({
          path: "/register",
        });
    },
  },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  align-content: space-between;
  justify-content: center;
}
.chekboxBtn {
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.v-messages {
  display: contents;
}
.check {
  width: 30px;
  height: 30px;
}
.v-application--wrap {
  justify-content: center !important;
  background-color: #dadcde;
}
.bosco {
  height: 20%;
  width: 20%;
  position: relative;
  left: 38%;
}
.donante {
  color: #dc001b;
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  line-height: normal;
  position: relative;
  transition: inherit;
}
.v-input--selection-controls {
  margin: 0 !important;
  padding: 0 !important;
}
.v-card__actions {
  display: block;
}
.layout {
  display: unset !important;
}
</style>
