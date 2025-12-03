---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7TEPS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCUv0sWPIDjCkzb1%2F%2BSzR7tXuX4dn6HWPJvTnwdu6k5LgIhAJBIo%2BWGrIo0C9H3AgRlHnzMD39L3%2BMjGb9Z4%2BVaNDriKv8DCC8QABoMNjM3NDIzMTgzODA1IgxBbu18l52FLtf6D4Iq3AO4VdOziLiVfTgKoYBYqHJAu%2B97Ktdh9qlEmb%2FkC0aMqHY7z9VCjfpWTwBPe2faLEJcfEUMjK9or9v8r2UL0dQ2q9xD02JOCRtFCT%2BS0e5u9QEwo3Ffi4Sj%2Bg%2FHSaKh9%2FmYNT5T47WC%2FFoJz9oW3a%2ByL6gSMTQFHrF8kX46eTfgXYKAZKzOt0j0YxHm0%2FEDxMguaf6mAKjj1chQCxuHdWwmpQdwtMUS7ME0P3aGtJGiYVRNC%2F1FgSR7rCvvUdE9H%2Foiw6wo4sd4Eu8Mpu9qrc8fIHBdwgNZMn1fp0289bX7c3ECMtiKGTpRE8sxGIPVfog4ku9v563DM9v8421SAxN8PJF8xoSp78s1Ga8VnXCAC9Z49t75V%2BzbU1EcMF1bmfcjJjjip%2F4ilFk2YjIsM7OT1dBopNmWugEb9FtdS0MsK0%2F%2FJdksrhD8ffFJJwgBSc8CH%2BkNsMhtcmJBXcjohm%2BV%2F3qtqORS5NXLDF1Z2UpHWZORy6XBFh3nc7r2kMbJPwPByqU6Re5S1nLin6gU2Om2GDnWVVQ%2B4XSSwERmEDvb%2F0GE9zEMPaQT5Lk7ucrGGJ6UHayTaH4JxQ09IZdEMf7ur3MaRN332IXslLLa8SJ%2BFc5DtxNp%2B8%2BbgMbg9jCSiMHJBjqkAWpYemTW4ybhYZ37BUnSltefuaX5eiSsH8dPTUkWuqMe6TUIpFKlef6KsjL1xz78B42QrfZbgqExuofRDnYVPaBFXTjgdss6iOyVT4M6bd5GSZDU7plDgUnwdGAn5XWGk%2Ffd%2Bnrc%2FrJklt3%2BalGqtHjgmgwcMyR2Qq74KXIT8IZIWbxGEx0Tv3%2BfZwsVrZcy0cCL3XCxkA51hX0rm8r2pnOS6NXA&X-Amz-Signature=4b92a54cda96c1ecc3473000e305fc992a29421b0c676ddbf9e2aecbfa69fb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7TEPS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCUv0sWPIDjCkzb1%2F%2BSzR7tXuX4dn6HWPJvTnwdu6k5LgIhAJBIo%2BWGrIo0C9H3AgRlHnzMD39L3%2BMjGb9Z4%2BVaNDriKv8DCC8QABoMNjM3NDIzMTgzODA1IgxBbu18l52FLtf6D4Iq3AO4VdOziLiVfTgKoYBYqHJAu%2B97Ktdh9qlEmb%2FkC0aMqHY7z9VCjfpWTwBPe2faLEJcfEUMjK9or9v8r2UL0dQ2q9xD02JOCRtFCT%2BS0e5u9QEwo3Ffi4Sj%2Bg%2FHSaKh9%2FmYNT5T47WC%2FFoJz9oW3a%2ByL6gSMTQFHrF8kX46eTfgXYKAZKzOt0j0YxHm0%2FEDxMguaf6mAKjj1chQCxuHdWwmpQdwtMUS7ME0P3aGtJGiYVRNC%2F1FgSR7rCvvUdE9H%2Foiw6wo4sd4Eu8Mpu9qrc8fIHBdwgNZMn1fp0289bX7c3ECMtiKGTpRE8sxGIPVfog4ku9v563DM9v8421SAxN8PJF8xoSp78s1Ga8VnXCAC9Z49t75V%2BzbU1EcMF1bmfcjJjjip%2F4ilFk2YjIsM7OT1dBopNmWugEb9FtdS0MsK0%2F%2FJdksrhD8ffFJJwgBSc8CH%2BkNsMhtcmJBXcjohm%2BV%2F3qtqORS5NXLDF1Z2UpHWZORy6XBFh3nc7r2kMbJPwPByqU6Re5S1nLin6gU2Om2GDnWVVQ%2B4XSSwERmEDvb%2F0GE9zEMPaQT5Lk7ucrGGJ6UHayTaH4JxQ09IZdEMf7ur3MaRN332IXslLLa8SJ%2BFc5DtxNp%2B8%2BbgMbg9jCSiMHJBjqkAWpYemTW4ybhYZ37BUnSltefuaX5eiSsH8dPTUkWuqMe6TUIpFKlef6KsjL1xz78B42QrfZbgqExuofRDnYVPaBFXTjgdss6iOyVT4M6bd5GSZDU7plDgUnwdGAn5XWGk%2Ffd%2Bnrc%2FrJklt3%2BalGqtHjgmgwcMyR2Qq74KXIT8IZIWbxGEx0Tv3%2BfZwsVrZcy0cCL3XCxkA51hX0rm8r2pnOS6NXA&X-Amz-Signature=3a156a5f2ee0a6ebb8ee324d0605b83171bcd9f3972603ce7e72c03801ac14bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

