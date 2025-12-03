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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCMA667%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDRqMGFDE0PpgC7SLvFLqBoV81h0Vq1tolcUPKLKDOw2gIgA9ecGkq1J10gEbL0jUWpBgnknA%2B1l9s6u6UApPxL6acq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDM%2Bp6Yv9c2t0p6KB%2ByrcA8XYZfEspNBBXr0yx4%2B%2BGhf95dR5NVV1v0FvfD96Qlhx3KFiaB8yfU%2Bgm4a6mTNCwAGDJtU42%2FqhIH7bxLoD4tO0DVk1j9NOQuitAvV8Cuy3wBoMYopv7TE4zT2DrAD%2BCXnWi34lJyuLaFIUbkViKNS4Puw6XdPrgSAU7usZvLor8juaWeoiz9Grm0Pl%2BgMCO8zlepklk90ZXPLKaoZSVE35Uex5GImli8CMqSl3VfK%2FUyehs2tuU%2B8U4NJqbL24BSdo7Ttw5%2FWFbW5b%2B%2FGj%2B%2FwabwjV4z%2F7NcofjEClSG4ag2dibxiJXXMoQRde80pLcBUxtvseMrFDKOVIoQ2OxM3GPZ%2FM1Fecg7fiuUJRYideASX7iH15ykKk7IClIo26LZ8bwfYFZmV3ygx2OtaEX%2FI6SfmXqjo8GRvVL0koYhZtz64OTB%2BpKqJThUHhgRsvd9FbJXrnx0QUbYOkZPJa0DwHEMrhXFJwKIOYKYY8xuzXHhZGl87DsTejx%2FbpfeYrO7q0eFtGu%2FOkpX726AasyGZaNiD7ppsMRLexRrrh2fZExS9v8fUxCSW5sJdPOy%2FkoU4oFTH1V9msg52bsX0WsOCyETMY1ZyEx8XOoPdGOkwelUbJhWglg3NUlGMUMOnMwMkGOqUB8v0QJLSRhWbMZWzlc1jKUYsOikoDYlT1NHyenDu%2BNCtEVkzhplLYY3m5BhIwMdmM5n2CmeAr9AuNfbrpt675ojLjYjBTDrQilvyzxPra6qyM8D4pDGnHS6jrRtycK9MaEqaUwmMF2EfUsUvh7savqLshDO0%2F%2BLSObIJaLj2ddSSyyljxhSV17ukXF5jD0PKdhc%2Bjz9KUpDo9hDGhAj%2FoOy7JG6Vc&X-Amz-Signature=d21df2a0c3b9e14b68868afcc4b638cbb307c122e5aa05243024a1a1edc87208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCMA667%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDRqMGFDE0PpgC7SLvFLqBoV81h0Vq1tolcUPKLKDOw2gIgA9ecGkq1J10gEbL0jUWpBgnknA%2B1l9s6u6UApPxL6acq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDM%2Bp6Yv9c2t0p6KB%2ByrcA8XYZfEspNBBXr0yx4%2B%2BGhf95dR5NVV1v0FvfD96Qlhx3KFiaB8yfU%2Bgm4a6mTNCwAGDJtU42%2FqhIH7bxLoD4tO0DVk1j9NOQuitAvV8Cuy3wBoMYopv7TE4zT2DrAD%2BCXnWi34lJyuLaFIUbkViKNS4Puw6XdPrgSAU7usZvLor8juaWeoiz9Grm0Pl%2BgMCO8zlepklk90ZXPLKaoZSVE35Uex5GImli8CMqSl3VfK%2FUyehs2tuU%2B8U4NJqbL24BSdo7Ttw5%2FWFbW5b%2B%2FGj%2B%2FwabwjV4z%2F7NcofjEClSG4ag2dibxiJXXMoQRde80pLcBUxtvseMrFDKOVIoQ2OxM3GPZ%2FM1Fecg7fiuUJRYideASX7iH15ykKk7IClIo26LZ8bwfYFZmV3ygx2OtaEX%2FI6SfmXqjo8GRvVL0koYhZtz64OTB%2BpKqJThUHhgRsvd9FbJXrnx0QUbYOkZPJa0DwHEMrhXFJwKIOYKYY8xuzXHhZGl87DsTejx%2FbpfeYrO7q0eFtGu%2FOkpX726AasyGZaNiD7ppsMRLexRrrh2fZExS9v8fUxCSW5sJdPOy%2FkoU4oFTH1V9msg52bsX0WsOCyETMY1ZyEx8XOoPdGOkwelUbJhWglg3NUlGMUMOnMwMkGOqUB8v0QJLSRhWbMZWzlc1jKUYsOikoDYlT1NHyenDu%2BNCtEVkzhplLYY3m5BhIwMdmM5n2CmeAr9AuNfbrpt675ojLjYjBTDrQilvyzxPra6qyM8D4pDGnHS6jrRtycK9MaEqaUwmMF2EfUsUvh7savqLshDO0%2F%2BLSObIJaLj2ddSSyyljxhSV17ukXF5jD0PKdhc%2Bjz9KUpDo9hDGhAj%2FoOy7JG6Vc&X-Amz-Signature=f698cecfe074feeb4dd66945f0ef6c00107366727dc15b474a72f95b5e951e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

