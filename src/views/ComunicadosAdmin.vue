<template>
<div>
    
   <form enctype="multipart/form-data" action="uploader.php" method="POST">
<input name="uploadedfile" type="file" />
<input type="submit" value="Subir archivo" />
</form>

</div>

</template>
<script>




export default{
    components: {
    
  },
    methods:{
        selec_file(event){
        this.fields.thumbnail = event.target.files[0];
        
        }
       
    }
}
</script>

<style scoped>
.contenedor-5{
    display: flex;
    justify-content: center;
    }
.file{
    color:red;
}
</style>Comunicados