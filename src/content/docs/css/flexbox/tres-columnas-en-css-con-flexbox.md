---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOGEDL4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgEu%2F2F8RfKFJ1Np5KVAYXZu7OgOSOV5cUKavvTsjgdAiAZhpoNL1vX7btBfeVsWQ6olX6ayp4WlXeOvC59mMP5lCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMebiPC1zd%2FSx9Y0cbKtwDYqf2FYMkEFbi0zPJWD4vpaHRhf3tZDupKiSBfZkyPdEMPPfZNrJOycAZEgN9o2bPgIVsg26Ff%2FL4y2YPWaavgSKkrXu0lcFSgUrGJV63zhTuuOvqfAwJWzD6DhftiRHbVaAnxGqvB22bzfWJ3YlM3NsfJRJdTFArZMBDQfGihsxwOX9qTwBlFfiAkp%2B9oomISObZttjc8znEbZ84z7Wc5iPtPKg2Vkwg478qFHfDLQuyET9%2FPULdeU4LGTHcLWEz2kEp1qh1r%2BnBJk8aM8qllVCq2uQFPdzuhViKPD9w2MN2f82q%2F1i7KGT7dqK%2FT5nei6oC0i%2FUmrTmAku5ALa8D%2Ftom57NtS%2Fc1nnF6aA5CpvdyvWDr4dyAVAaemo3lg6JgLShdWTOtlOL%2B1SvOupHwRwQYvv8XKlCHrL0YZeMux5TlX9N6HRnAOmKb8iBKBmBDx1EjAnfvSTKWf4twpXwdjy%2BP30pyeQ9dhPg6qqH6FubfCGe1teqAQRKgb8ZUm3EJpUJEV3s5mayC35Wiq4M%2Fx2gyhp1G895nbvpUDFRSiPpy0Ynj%2FQPtUUQm3mp8Mw8AHAF87DcPgvuF1SM6AyNpxWQr%2B56vxeDT0EmgpjuG8G54sKD%2FuE2LezRCyowu8HRyQY6pgFFdOj8Q0xSCzaWfCNOJapv0%2Fja0YEOAUS4%2F1oLHtsxwwYKslLMhXegTAVsQTLMnCPhSg4VuGFPcjcuOu5RqQItlaUJMuuDxKz56ghKNFacH%2BZ9eTbF1JxC9n5rhfK6gPilmFoZHJ%2F%2FOXoU7pXHzyfQvGWpKqqCihAWRy0e0MxbAoaALugaNiZf59cllTM6Cmb64m%2FNnUxKBLbXXmT%2FhDjl3PFmXMRB&X-Amz-Signature=5497054b94f340c147e9c23783afdb90b280ed5efcfd856e4862bdf0043e42eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOGEDL4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgEu%2F2F8RfKFJ1Np5KVAYXZu7OgOSOV5cUKavvTsjgdAiAZhpoNL1vX7btBfeVsWQ6olX6ayp4WlXeOvC59mMP5lCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMebiPC1zd%2FSx9Y0cbKtwDYqf2FYMkEFbi0zPJWD4vpaHRhf3tZDupKiSBfZkyPdEMPPfZNrJOycAZEgN9o2bPgIVsg26Ff%2FL4y2YPWaavgSKkrXu0lcFSgUrGJV63zhTuuOvqfAwJWzD6DhftiRHbVaAnxGqvB22bzfWJ3YlM3NsfJRJdTFArZMBDQfGihsxwOX9qTwBlFfiAkp%2B9oomISObZttjc8znEbZ84z7Wc5iPtPKg2Vkwg478qFHfDLQuyET9%2FPULdeU4LGTHcLWEz2kEp1qh1r%2BnBJk8aM8qllVCq2uQFPdzuhViKPD9w2MN2f82q%2F1i7KGT7dqK%2FT5nei6oC0i%2FUmrTmAku5ALa8D%2Ftom57NtS%2Fc1nnF6aA5CpvdyvWDr4dyAVAaemo3lg6JgLShdWTOtlOL%2B1SvOupHwRwQYvv8XKlCHrL0YZeMux5TlX9N6HRnAOmKb8iBKBmBDx1EjAnfvSTKWf4twpXwdjy%2BP30pyeQ9dhPg6qqH6FubfCGe1teqAQRKgb8ZUm3EJpUJEV3s5mayC35Wiq4M%2Fx2gyhp1G895nbvpUDFRSiPpy0Ynj%2FQPtUUQm3mp8Mw8AHAF87DcPgvuF1SM6AyNpxWQr%2B56vxeDT0EmgpjuG8G54sKD%2FuE2LezRCyowu8HRyQY6pgFFdOj8Q0xSCzaWfCNOJapv0%2Fja0YEOAUS4%2F1oLHtsxwwYKslLMhXegTAVsQTLMnCPhSg4VuGFPcjcuOu5RqQItlaUJMuuDxKz56ghKNFacH%2BZ9eTbF1JxC9n5rhfK6gPilmFoZHJ%2F%2FOXoU7pXHzyfQvGWpKqqCihAWRy0e0MxbAoaALugaNiZf59cllTM6Cmb64m%2FNnUxKBLbXXmT%2FhDjl3PFmXMRB&X-Amz-Signature=041301f3b2488fd88f04e7fb9d1d9f2ef2e42651b4c6dd25134911a7eed95474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

