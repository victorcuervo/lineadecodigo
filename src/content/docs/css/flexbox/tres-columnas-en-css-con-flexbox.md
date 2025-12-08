---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K5J62P6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGU9cmDATew%2BCRpDOajuW3%2BYdb15KPon8A7UzkkHAZQAiARSLnRffK6ko%2F7hDix%2Bt0EhA9A8LbAqlWzaFrqJN5%2BzSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN8bc8AB%2BX52kKmBrKtwDGxMDpzy9ta0wHLg%2Bpm64IFq88VKbk%2FRc4UiXm60jVR12a5B4nQnLXZkpQmv8EdTZsudb%2BGvCGhNdDuokUpcGyIuE0OOuWFUCT7ol7RUCiRNifCB3wIYvoTJssaZkg%2FCZYo7n3iYBqB3Vk%2B7zZhr1%2BpmJ80A8fwTtVxQThNm62S%2FJhbmYj8tQwsXLdpEIcSD2MoA%2Fh0JJHMycDzo%2BEcan7NnSL0pAlTQemcSjewzKUE1z6gSDS%2FYjMO3BbXPjsgtoMxRs5IWOO%2BxDDHVrdYz3l%2BPHbtFl3pfs70hyRyAJ0xYt96C59I3bu7IvkTaThr3tKdYfWVWqaYhE8j9TJHFmbo%2B92IahLd6y2WdQqkmGt%2Fxqui0%2FWZaupRogcD%2BpdG9%2Bg2hFolLflTDHdqsF5V%2BmYD0ETtQCN5FV%2B%2BpVT%2F6vhqCc36o2CaYdVLE4bZEqB%2B16xWvNLQigMuF95j2tw1h%2FovtACd4JiC6rMMRoiJ8oHDgrWTJuTRegV3sb0ZkfaVpyUAAmSZVG3gBwJ1mSJKPITd5rDAsW%2BL6o8qTcv0n%2F9j0C0YJSJUAwmLZgydz5x6gcQBK3pE%2FqfKddfZ1IfOAAzd%2F81tilCjQ%2BnQCvuZurkUNA7zPFXPgrBOvJF3wwm8HbyQY6pgGamJwGTuJVlP2xcfRqYGo%2Bu5wuorY5omVbv1kq0OBT%2BK8E2ZcVQapu9YGOubgUIO8ViE%2FMkZV4JGTrtmTGp%2BzAI2ZNvgmrhTV76HIaNpYlGtCrl0HS7HP0Wd05dOz3wqF%2B%2FpbFihO90x6rkO8uezKUZ6B3jOpSy39XKOkLm%2BOw4JpvKijwqoreA61yxwfQxfP2mtqdEyryl%2BNYu9LdOPEnzUyUbmaT&X-Amz-Signature=a47fd55d52efe4225f26cce0c1f814eb996fd77135385510dc1bb61b03f830e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K5J62P6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGU9cmDATew%2BCRpDOajuW3%2BYdb15KPon8A7UzkkHAZQAiARSLnRffK6ko%2F7hDix%2Bt0EhA9A8LbAqlWzaFrqJN5%2BzSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN8bc8AB%2BX52kKmBrKtwDGxMDpzy9ta0wHLg%2Bpm64IFq88VKbk%2FRc4UiXm60jVR12a5B4nQnLXZkpQmv8EdTZsudb%2BGvCGhNdDuokUpcGyIuE0OOuWFUCT7ol7RUCiRNifCB3wIYvoTJssaZkg%2FCZYo7n3iYBqB3Vk%2B7zZhr1%2BpmJ80A8fwTtVxQThNm62S%2FJhbmYj8tQwsXLdpEIcSD2MoA%2Fh0JJHMycDzo%2BEcan7NnSL0pAlTQemcSjewzKUE1z6gSDS%2FYjMO3BbXPjsgtoMxRs5IWOO%2BxDDHVrdYz3l%2BPHbtFl3pfs70hyRyAJ0xYt96C59I3bu7IvkTaThr3tKdYfWVWqaYhE8j9TJHFmbo%2B92IahLd6y2WdQqkmGt%2Fxqui0%2FWZaupRogcD%2BpdG9%2Bg2hFolLflTDHdqsF5V%2BmYD0ETtQCN5FV%2B%2BpVT%2F6vhqCc36o2CaYdVLE4bZEqB%2B16xWvNLQigMuF95j2tw1h%2FovtACd4JiC6rMMRoiJ8oHDgrWTJuTRegV3sb0ZkfaVpyUAAmSZVG3gBwJ1mSJKPITd5rDAsW%2BL6o8qTcv0n%2F9j0C0YJSJUAwmLZgydz5x6gcQBK3pE%2FqfKddfZ1IfOAAzd%2F81tilCjQ%2BnQCvuZurkUNA7zPFXPgrBOvJF3wwm8HbyQY6pgGamJwGTuJVlP2xcfRqYGo%2Bu5wuorY5omVbv1kq0OBT%2BK8E2ZcVQapu9YGOubgUIO8ViE%2FMkZV4JGTrtmTGp%2BzAI2ZNvgmrhTV76HIaNpYlGtCrl0HS7HP0Wd05dOz3wqF%2B%2FpbFihO90x6rkO8uezKUZ6B3jOpSy39XKOkLm%2BOw4JpvKijwqoreA61yxwfQxfP2mtqdEyryl%2BNYu9LdOPEnzUyUbmaT&X-Amz-Signature=32203b0ad38857ebfe7b3fc415b0caaaeb3fffa8b48a8a5868f7936f5c4c9f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

