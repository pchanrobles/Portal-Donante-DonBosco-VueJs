<template>
  <div class="container">
    <!--UPLOAD-->
    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
      <h1>Subir PDF</h1>
      <div class="dropbox">
        <input
          type="file"
          multiple
          :name="uploadFieldName"
          :disabled="isSaving"
          @change="
            filesChange($event.target.name, $event.target.files);
            fileCount = $event.target.files.length;
          "
          accept="all/*"
          class="input-file"
        />
        <p v-if="isInitial">
          Arrastra tu archivo PDF aquí para guardarlo<br />
          o haz click para buscar el archivo en tu pc.
        </p>
        <p v-if="isSaving">Subiendo {{ fileCount }} archivos...</p>
      </div>
    </form>

    <!--SUCCESS-->
    <div v-if="isSuccess">
      <h2>
        Se {{ fileCount.length != "1" ? "han" : "ha" }} subido {{ fileCount }}
        {{ fileCount.length != "1" ? "archivos" : "archivo" }} correctamente.
      </h2>
      <p>
        <a href="javascript:void(0)" @click="reset()"
          >Subir un archivo de nuevo</a
        >
      </p>
    </div>

    <!--FAILED-->
    <div v-if="isFailed">
      <h2>Subida de archivo fallida.</h2>
      <p>
        <a href="javascript:void(0)" @click="reset()">Inténtelo de nuevo</a>
      </p>
    </div>
  </div>
</template>

<script>
import AdminService from "../services/AdminService.js";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  components: {},
  data() {
    return {
      uploadedFiles: [],
      currentStatus: null,
      uploadFieldName: "file",
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
    },

    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      AdminService(formData)
        .then((x) => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          console.log('ERROR AL SUBIR ARCHIVO')
          this.currentStatus = STATUS_FAILED;
        });
    },

    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      // save it
      this.save(formData);
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style>
.dropbox {
  outline: 2px dashed grey;
  /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  /* minimum height */
  position: relative;
  cursor: pointer;
}
.input-file {
  opacity: 0;
  /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
.dropbox:hover {
  background: lightblue;
  /* when mouse over to the drop zone, change color */
}
.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
