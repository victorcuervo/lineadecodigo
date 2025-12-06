---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HO7BNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8bRoLphgI424GRcQNrAM5eIiduesyehsi%2FONsY%2FReAiBX5eeCUD%2FJFg6CqGfWlqfrl07cj7ik21rFJ049D5lWiSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMB9S4nMffOQNi66mOKtwDkVfyP3tr9v72dq%2Bss3euSq6X5j2EmFkaY6wTl578DruTyXJThGH1sDl4serSJlNKmy%2FFZ3JJtT1Edi1sjbO6xMq%2FJteMVHVXrIPXxZ%2BNHvg87RzsX2B%2Bbkwdd0ExAogIHyGqc9xhNSg9%2BGzAP9MzhQN7Xl3HC7AiNegCWFTvlkqIzevb1ookmMXr4JkgkTcBVPmYFAGCi%2F%2BsPscfH%2F%2B5rjbbU0AVvaWE8gzut1We4ef7kInX3UgmtRRnqgjbSdBsoTHBECx2eJpFe%2BUghu4HmFK29aCBC82Tr9pLcGx0Pv0WTw8wpmWTR49MkPxxbs%2B33zI%2Bhs0H1i5iXR8A3zBbc%2B5Fv2Uvt5q3Kdt9z6FWYkwsPcOH%2BpYLcxSRUWgVr0xXVTHD4T2g9wU3pZ5PVFjjcXdLsOxjd9wofCmWDkIdIbOrqvmJ7qpEQuf60IDr%2Fhr5qJZnRY7OsHIfoXMe%2Ft7HtPG22HvbYWvn%2BUZ%2F19%2BoqH0of%2FiX1YsAWWnGZxxTVV3P2ItJaRFaIhS%2B7pJovXDPG3C4Evdz%2FKV0PogEqN%2BpY13t44eWz%2BFbkNvEEbTzQRJ9ixd0alJ3UxV1cx%2FkqeeTPkpsadTHiTzy6%2FO0xzbz8My37Esh7UILmI1VkoQwiJ%2FPyQY6pgHyLJ59Hpem%2Bs7XwznVJgh1LgDAq%2BcDWY2s8vcrYpGAdNypf8GUkDjohfusE3jZF%2F4SrHcQwLuy2TIKaHghGj%2BWFFPqYDeRemwItcQ825%2BwXYeL3PZHpE33HBPnLTx8ICecuh4XEL4%2FrOH7qfKf8kMsH%2BC9cOqkjw%2F40UiJkYHnw7rnWv2Amlltut3Plzaa1zQXFJiSg%2By%2Fw6Iug2oaADfroVUq0l%2By&X-Amz-Signature=319845677a29880f97967cc9db0fbfac73e4c89e9e88958a62bdcaaae8768fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HO7BNN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8bRoLphgI424GRcQNrAM5eIiduesyehsi%2FONsY%2FReAiBX5eeCUD%2FJFg6CqGfWlqfrl07cj7ik21rFJ049D5lWiSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMB9S4nMffOQNi66mOKtwDkVfyP3tr9v72dq%2Bss3euSq6X5j2EmFkaY6wTl578DruTyXJThGH1sDl4serSJlNKmy%2FFZ3JJtT1Edi1sjbO6xMq%2FJteMVHVXrIPXxZ%2BNHvg87RzsX2B%2Bbkwdd0ExAogIHyGqc9xhNSg9%2BGzAP9MzhQN7Xl3HC7AiNegCWFTvlkqIzevb1ookmMXr4JkgkTcBVPmYFAGCi%2F%2BsPscfH%2F%2B5rjbbU0AVvaWE8gzut1We4ef7kInX3UgmtRRnqgjbSdBsoTHBECx2eJpFe%2BUghu4HmFK29aCBC82Tr9pLcGx0Pv0WTw8wpmWTR49MkPxxbs%2B33zI%2Bhs0H1i5iXR8A3zBbc%2B5Fv2Uvt5q3Kdt9z6FWYkwsPcOH%2BpYLcxSRUWgVr0xXVTHD4T2g9wU3pZ5PVFjjcXdLsOxjd9wofCmWDkIdIbOrqvmJ7qpEQuf60IDr%2Fhr5qJZnRY7OsHIfoXMe%2Ft7HtPG22HvbYWvn%2BUZ%2F19%2BoqH0of%2FiX1YsAWWnGZxxTVV3P2ItJaRFaIhS%2B7pJovXDPG3C4Evdz%2FKV0PogEqN%2BpY13t44eWz%2BFbkNvEEbTzQRJ9ixd0alJ3UxV1cx%2FkqeeTPkpsadTHiTzy6%2FO0xzbz8My37Esh7UILmI1VkoQwiJ%2FPyQY6pgHyLJ59Hpem%2Bs7XwznVJgh1LgDAq%2BcDWY2s8vcrYpGAdNypf8GUkDjohfusE3jZF%2F4SrHcQwLuy2TIKaHghGj%2BWFFPqYDeRemwItcQ825%2BwXYeL3PZHpE33HBPnLTx8ICecuh4XEL4%2FrOH7qfKf8kMsH%2BC9cOqkjw%2F40UiJkYHnw7rnWv2Amlltut3Plzaa1zQXFJiSg%2By%2Fw6Iug2oaADfroVUq0l%2By&X-Amz-Signature=ea79954e397622916e2894a0663c3b070410dcbfc7908de2af162be1ac8ffab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

