---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJRQZZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDCbriXc0isau5xAIAHT6PxSBICazA1yTvDvLQeGA0%2FVAIhAI%2Fm%2FU%2FG3CUQPu6vgAybqMjYF5quM2NxX%2BRszSAZMB4%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgySritZLuc2c371pH8q3APmqW%2F2V3AB%2FbOAHxVCIZOCewW65bN0KaZSWRrlZ1psGwX0hjBODNZL9NMGGtwwnOOWsf9kFnvvzFRVodRZJzBWC9DGClHhvxTFNP%2Bfqr360L6IaMmboXqdBIDDUBCZabX22QeNPd0Z%2BeFCXontRmorCccld123LDe4oRDQVmdsbxjC8IZJ18bSBbrJhIPrv%2Bnvh3nOaXm2nlrjDiSo68CDJAdqAeVpw3dGiaQ7jTzQS7RvDYk4ikQLvoQwyl8sjtDWyXaIPtTn0uQwS3r%2BbyTy3vReRmTpzbpWkqy95c3zcuaROjwpDmqOFz3zWJyl9HMeAiDqlvmWz6Bj6WxokEgyCGBXDFyA%2BVrHNKbPsHDJPZhP8n%2BhKlxG9pnqTEb247auMVanxTFMq7f71RCDJXloVXDIA0rXuvmwY0ZusnwxWX%2F0hAEYq0nwclI6mgrGdLLnJoxvBnuRbsxs0utNJGESfUBakE0r9G%2Fy97BTkxPc0HuRCBObJRd8agxMm2obOn%2FGPD8ydoO%2B3okxGC%2B7iSW%2Fq5s6yo4N%2Bc5mGAF9vYkhODNlKti6308hvKCFX8pN%2Fw2%2FNsnhm2DbCo66IVm1KIU%2Bfe%2FM2vcoQW2lGE%2BtCg50gYAyRqxmUxAWzUXnyjCSrsTJBjqkATteuWM9SkgtB26LGxu%2FqycEQUtIw2zQOaEG4eFK7MHwS3AvrFP%2FQBbOPJ6H%2FDhixQ4eCkKxPoHsn4pvYc4PivTWIx13X5gW%2B77gcsE9MQGSukWDMus0uW%2FvOj6bMngt%2FmRSpEoeQjPHBSky%2B55hhjWs1Vz5jEZu8ZcgdfBiADqtrBlfV1DheDeAHTHGkc4yz3WRurAlOvoQTJ5pTauZshQhpxVY&X-Amz-Signature=f09e7ac4df344a29ddf6e95b8f7ab971b82e75b7429ea07ee1436aa6e1cfc4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJRQZZJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDCbriXc0isau5xAIAHT6PxSBICazA1yTvDvLQeGA0%2FVAIhAI%2Fm%2FU%2FG3CUQPu6vgAybqMjYF5quM2NxX%2BRszSAZMB4%2FKv8DCD4QABoMNjM3NDIzMTgzODA1IgySritZLuc2c371pH8q3APmqW%2F2V3AB%2FbOAHxVCIZOCewW65bN0KaZSWRrlZ1psGwX0hjBODNZL9NMGGtwwnOOWsf9kFnvvzFRVodRZJzBWC9DGClHhvxTFNP%2Bfqr360L6IaMmboXqdBIDDUBCZabX22QeNPd0Z%2BeFCXontRmorCccld123LDe4oRDQVmdsbxjC8IZJ18bSBbrJhIPrv%2Bnvh3nOaXm2nlrjDiSo68CDJAdqAeVpw3dGiaQ7jTzQS7RvDYk4ikQLvoQwyl8sjtDWyXaIPtTn0uQwS3r%2BbyTy3vReRmTpzbpWkqy95c3zcuaROjwpDmqOFz3zWJyl9HMeAiDqlvmWz6Bj6WxokEgyCGBXDFyA%2BVrHNKbPsHDJPZhP8n%2BhKlxG9pnqTEb247auMVanxTFMq7f71RCDJXloVXDIA0rXuvmwY0ZusnwxWX%2F0hAEYq0nwclI6mgrGdLLnJoxvBnuRbsxs0utNJGESfUBakE0r9G%2Fy97BTkxPc0HuRCBObJRd8agxMm2obOn%2FGPD8ydoO%2B3okxGC%2B7iSW%2Fq5s6yo4N%2Bc5mGAF9vYkhODNlKti6308hvKCFX8pN%2Fw2%2FNsnhm2DbCo66IVm1KIU%2Bfe%2FM2vcoQW2lGE%2BtCg50gYAyRqxmUxAWzUXnyjCSrsTJBjqkATteuWM9SkgtB26LGxu%2FqycEQUtIw2zQOaEG4eFK7MHwS3AvrFP%2FQBbOPJ6H%2FDhixQ4eCkKxPoHsn4pvYc4PivTWIx13X5gW%2B77gcsE9MQGSukWDMus0uW%2FvOj6bMngt%2FmRSpEoeQjPHBSky%2B55hhjWs1Vz5jEZu8ZcgdfBiADqtrBlfV1DheDeAHTHGkc4yz3WRurAlOvoQTJ5pTauZshQhpxVY&X-Amz-Signature=6b97641ae0f1214ce058ce9f1bb19990b400088584f83b0eba83d0d80b9d6dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

