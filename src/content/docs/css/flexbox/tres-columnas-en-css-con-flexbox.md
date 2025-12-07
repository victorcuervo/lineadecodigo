---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSWOYDF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5TQo6Ts%2Bs5icn%2F4LtwWJj9bImIAqlbKZzRDqbpuB90AiA6hBHaM%2FT5DjarbbpqEKWFXFEjRujlM%2BpRcZojKtl2pCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0gvze%2FEN9dvW10BKtwDbffhCBEMNqvaRyZi%2B9VImwRRgvrI1S3K4Ki1qwN83hwB2qCXNHZknaPUe2Q%2FDJc5mNSH2rDIaxVaBDnIGUjs9%2FS2%2BJjScQRW1KD9FikBfRBVWCdIYTYGJ02XybSgrDqOVcEmBSCLsZ%2FjAuN5Ua6dFMRML%2F5j7TNSYgiFVB1KK6HcwqrZ63XuQr9FA0JB711Vr1DFl8Fba8W15pVSV1vxaPoxkDiazGM62inJgq0exK1nV7luknxQpiGEMrFjABliVBKkLcRJ5SdEF6ZHTTSed%2BJa%2BEH7rh%2FB0M7e%2BxWeX5ITUT4kds%2FOnAQdBbpYdMIiZWTAuxbYYhKEeB7r7TtAsAca1Vhey00J109bLfg01UB5s%2Buabjg1b73cDqK%2Fi%2BiuKVn7qZ3tQNAwrE9yb2DAewJ7I%2Fa7wuML%2FjnkNQ%2BCsqzPKWLH0wpEEP8oBiVBDxBQhd3RMp1YI1kxKP%2F%2FU4UFnQKa5oWnQ1Qg4%2BJZJRCR%2FGec3n1wWtWeEX8RVxAsvgwGeQNqVDKiF05F0LwZrmfJnTe3GeDMFByeR5NhTNULI1ybiNT8CAelmPKkg86QPnbeYXnox%2B%2Fn4bt2Qcs1wp0H9Sj3WNhURL2Kvobzcg%2BvMJCxNdeXFl3NkgzRjxow%2BKjXyQY6pgFpE1%2FhxfP6AgU8049%2BYyr5wHwmf9ic9oMnFploP1iglPk4t5gsXHNlO4nxYTdiUyRpjpsdMFpWQb8smYWmqamLjXIsVR1rGrT2H8LQzn4cCt8SOlKA4CFbs4l0T9Q6Ik%2F%2Fi%2BL8j5mOlz11rCigMp46z%2BwKibLfODsX0OngoEX2B8%2BNXSyD8NtmK3DWyUxNaTH68UABBworFkLcoZG4ZtqPEjGE0kNv&X-Amz-Signature=7cf2d60c59192b3600d9aef1a9896220d4ae0f995c38f5d53bb8132014fab89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSWOYDF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5TQo6Ts%2Bs5icn%2F4LtwWJj9bImIAqlbKZzRDqbpuB90AiA6hBHaM%2FT5DjarbbpqEKWFXFEjRujlM%2BpRcZojKtl2pCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0gvze%2FEN9dvW10BKtwDbffhCBEMNqvaRyZi%2B9VImwRRgvrI1S3K4Ki1qwN83hwB2qCXNHZknaPUe2Q%2FDJc5mNSH2rDIaxVaBDnIGUjs9%2FS2%2BJjScQRW1KD9FikBfRBVWCdIYTYGJ02XybSgrDqOVcEmBSCLsZ%2FjAuN5Ua6dFMRML%2F5j7TNSYgiFVB1KK6HcwqrZ63XuQr9FA0JB711Vr1DFl8Fba8W15pVSV1vxaPoxkDiazGM62inJgq0exK1nV7luknxQpiGEMrFjABliVBKkLcRJ5SdEF6ZHTTSed%2BJa%2BEH7rh%2FB0M7e%2BxWeX5ITUT4kds%2FOnAQdBbpYdMIiZWTAuxbYYhKEeB7r7TtAsAca1Vhey00J109bLfg01UB5s%2Buabjg1b73cDqK%2Fi%2BiuKVn7qZ3tQNAwrE9yb2DAewJ7I%2Fa7wuML%2FjnkNQ%2BCsqzPKWLH0wpEEP8oBiVBDxBQhd3RMp1YI1kxKP%2F%2FU4UFnQKa5oWnQ1Qg4%2BJZJRCR%2FGec3n1wWtWeEX8RVxAsvgwGeQNqVDKiF05F0LwZrmfJnTe3GeDMFByeR5NhTNULI1ybiNT8CAelmPKkg86QPnbeYXnox%2B%2Fn4bt2Qcs1wp0H9Sj3WNhURL2Kvobzcg%2BvMJCxNdeXFl3NkgzRjxow%2BKjXyQY6pgFpE1%2FhxfP6AgU8049%2BYyr5wHwmf9ic9oMnFploP1iglPk4t5gsXHNlO4nxYTdiUyRpjpsdMFpWQb8smYWmqamLjXIsVR1rGrT2H8LQzn4cCt8SOlKA4CFbs4l0T9Q6Ik%2F%2Fi%2BL8j5mOlz11rCigMp46z%2BwKibLfODsX0OngoEX2B8%2BNXSyD8NtmK3DWyUxNaTH68UABBworFkLcoZG4ZtqPEjGE0kNv&X-Amz-Signature=b0fca6726ac9dab1e419180f7fa7a4adcbd9a9c4b453e68e87e27e76a0dc28f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

