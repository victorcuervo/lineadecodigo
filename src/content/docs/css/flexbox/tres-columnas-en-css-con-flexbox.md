---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJMUDXT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOrHT2Ym8hWoKAb2AeEl%2FvpbSTt8ZjZeuUE2fKiH9HFAiBoASnmUlSNeZkUkOEpqAW5vxXpRYwU66uu7J1dPtpvMSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMozYqT70%2FY6C8CY7eKtwDS%2F%2BxzrwzesnGgixmTeWJAjR0hfcJDxFpd2Qr6ULXSS385vC%2FBRPpkmRQi81l5Rq3Jos%2FKObmLhs2Blbyvq5lp%2Bgtyl08X8hxjXSC0P4H3KbgdEnXjBmXyUsRA5JDWMo0SF%2FttIKXCt0uPB42dozuQ4T8wxJ33vk9QBEyjHblIqSil2Pipi9rD2iejyLZVaibBOoOibtRHGwKpnkSRRfEjd0TIE0KbcjAbOnfqbbxFZfloIB7qfQ2o7gsFr5MlqMMh6gq6KSE6cbEKwYjN6JIa2ObUdiMRqF%2FvwriYHflGNrPrGelGO84qJ9ekHJja5JjIxY8RP17i6VsCU4SutZcVqNGpqDW03B4vcEbb6Rn2Cj5w9PxjdoVFNpCQVgPIAMEA%2FOMM6PLQTR%2FQutLzt8uY4svp4IJxTBg6DkVjHSDclXehbvgKxBlf4u2%2Biyp9QE8LJFXe6ht4zoLz3o1gJa0QUK7dBskcnn89ysCTndS09FZbow11EWty83unQ3%2FFnZS4pOXqnEweM%2BbI5l8r4NavTJHuG4tldt1U4dfMk8%2BwQlvzorLqrNK3wwmWwS0R2v9n8sxuscgQqRPvVj1ES29WNXaNjkSMH7oVObG4dALEKKgOjfhr%2Fy5H5HHl08w04%2FbyQY6pgHG5gIPh6RHmwVJ4KNtW%2FqebMvDrvWhu80TKFkLkJ%2B2gjj%2F%2Fpki%2FKV2nnMSdbdkdN9fkad1lmINNhszK2zGg3IZurnFNaB6p%2BmZapQGrcvcer%2BL1JqJT6aEvXGGwRWxmEICBaAVgQg5DgeA0Q3cH%2Bgo7XOLW5%2FuZc51LI7muK0fBeDvJ%2FI4gH8omQJmkcPndWiT39RxwOR0xfv2ZQ6eoNVQMJ92QCC%2B&X-Amz-Signature=aa5956f1816f92745d67c6e229ce9aff32b780c28d0ccac9b25cd7726c444e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJMUDXT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOrHT2Ym8hWoKAb2AeEl%2FvpbSTt8ZjZeuUE2fKiH9HFAiBoASnmUlSNeZkUkOEpqAW5vxXpRYwU66uu7J1dPtpvMSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMozYqT70%2FY6C8CY7eKtwDS%2F%2BxzrwzesnGgixmTeWJAjR0hfcJDxFpd2Qr6ULXSS385vC%2FBRPpkmRQi81l5Rq3Jos%2FKObmLhs2Blbyvq5lp%2Bgtyl08X8hxjXSC0P4H3KbgdEnXjBmXyUsRA5JDWMo0SF%2FttIKXCt0uPB42dozuQ4T8wxJ33vk9QBEyjHblIqSil2Pipi9rD2iejyLZVaibBOoOibtRHGwKpnkSRRfEjd0TIE0KbcjAbOnfqbbxFZfloIB7qfQ2o7gsFr5MlqMMh6gq6KSE6cbEKwYjN6JIa2ObUdiMRqF%2FvwriYHflGNrPrGelGO84qJ9ekHJja5JjIxY8RP17i6VsCU4SutZcVqNGpqDW03B4vcEbb6Rn2Cj5w9PxjdoVFNpCQVgPIAMEA%2FOMM6PLQTR%2FQutLzt8uY4svp4IJxTBg6DkVjHSDclXehbvgKxBlf4u2%2Biyp9QE8LJFXe6ht4zoLz3o1gJa0QUK7dBskcnn89ysCTndS09FZbow11EWty83unQ3%2FFnZS4pOXqnEweM%2BbI5l8r4NavTJHuG4tldt1U4dfMk8%2BwQlvzorLqrNK3wwmWwS0R2v9n8sxuscgQqRPvVj1ES29WNXaNjkSMH7oVObG4dALEKKgOjfhr%2Fy5H5HHl08w04%2FbyQY6pgHG5gIPh6RHmwVJ4KNtW%2FqebMvDrvWhu80TKFkLkJ%2B2gjj%2F%2Fpki%2FKV2nnMSdbdkdN9fkad1lmINNhszK2zGg3IZurnFNaB6p%2BmZapQGrcvcer%2BL1JqJT6aEvXGGwRWxmEICBaAVgQg5DgeA0Q3cH%2Bgo7XOLW5%2FuZc51LI7muK0fBeDvJ%2FI4gH8omQJmkcPndWiT39RxwOR0xfv2ZQ6eoNVQMJ92QCC%2B&X-Amz-Signature=b9152bdff8724fdf16e24444a678a12d56b6d75346528c28114119241f6ce1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

