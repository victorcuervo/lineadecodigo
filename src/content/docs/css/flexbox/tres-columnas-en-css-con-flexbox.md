---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QM22EM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0ribQ7CB3zaCBY0nNNrKuu5cJ9l59HBd3pdMgce8QJgIgET3v3H%2BX1fw2vMoQ8LbBHaZuBmX%2Fhz7Kbbw%2Bg2X54xUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1mHCUUIIPxWcA39CrcAxDfXSmrimO9exIWJTgizBhdwCQ%2FnZs1Kr3%2FeJOOI1%2FWmHrqQLAHs14hzXwYfHwzpyFvWP%2FWKgEcZnRwXPVzintIu59TxcyNosrYFrcZ25EfX%2FrncKECUa2pNFrOGmY6PvCh8k8Bt0nkFqMJ4%2FrXw25%2BCngYwcAQFhbyVUirFAHsJF2wsvzlecgi%2F6%2FWjCUkgFm6%2FKL4SVqxml2fUliUIH1vCGAAjx33bFw%2FCdiKFYj20GtULw96klsuYYEW3Y6XISRERDR%2BtwHffTpoxmnOhxUpxV6hD5Nnbo9s2mSh8Vvyu%2Fb3FAF3W9Z87UaH%2FB%2BBmQQGHbpFm3dKc2WB%2BLJ9OoMV1riVEmfyQ9zZOfPtlP004%2FgxoOxMWvmmLeI9MxFv9GDycnNJ4kr7TBh6tniJJAJ2q71nuMjMmrF9JYFI2Co1tr1WwpNi3r5GT6B5y9mFB47AQ0GYSUrtocx8zTUsQZRmlysLEf088vzt7ULemsww9dtGYP5vjIT0WFVPlC2R0n1Bs2lo1m9fDF2%2F7PTbQVxqdUHuMmQL4mXtaRa7YdPav0bN%2Filr26k2OToCdJh%2Biz%2BBzP2Uf444sjXa4j7oRM3weltV%2BSh3YGrrbV68XKZvSshe3bLTeov4g2%2FhMJHl28kGOqUBH3%2FuLT1YT58kyz5Xcsy9K276L7K2jG4olhzwdCin7G9tu5ekPyNN8VJPkVf6%2FM3zIGhHmry4d2pKGSxBoYHmDWgZG4zJaDDx6XzqquY6ghNg1GZSUI4%2F1V84O8eNOu%2FFg2meAaJC9BSQAFyx9Dbllxk5yxxBa8PgnddnrPPLjY1KHDwYt4A25Yw%2BG%2FgkQHpK%2F2z1KLY31%2BlROOrTSUwUSlYUUNpQ&X-Amz-Signature=dfd4d311cd71ac9228d09388644b44193b91ca7d90391cfdf3586d6782b570e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QM22EM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0ribQ7CB3zaCBY0nNNrKuu5cJ9l59HBd3pdMgce8QJgIgET3v3H%2BX1fw2vMoQ8LbBHaZuBmX%2Fhz7Kbbw%2Bg2X54xUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1mHCUUIIPxWcA39CrcAxDfXSmrimO9exIWJTgizBhdwCQ%2FnZs1Kr3%2FeJOOI1%2FWmHrqQLAHs14hzXwYfHwzpyFvWP%2FWKgEcZnRwXPVzintIu59TxcyNosrYFrcZ25EfX%2FrncKECUa2pNFrOGmY6PvCh8k8Bt0nkFqMJ4%2FrXw25%2BCngYwcAQFhbyVUirFAHsJF2wsvzlecgi%2F6%2FWjCUkgFm6%2FKL4SVqxml2fUliUIH1vCGAAjx33bFw%2FCdiKFYj20GtULw96klsuYYEW3Y6XISRERDR%2BtwHffTpoxmnOhxUpxV6hD5Nnbo9s2mSh8Vvyu%2Fb3FAF3W9Z87UaH%2FB%2BBmQQGHbpFm3dKc2WB%2BLJ9OoMV1riVEmfyQ9zZOfPtlP004%2FgxoOxMWvmmLeI9MxFv9GDycnNJ4kr7TBh6tniJJAJ2q71nuMjMmrF9JYFI2Co1tr1WwpNi3r5GT6B5y9mFB47AQ0GYSUrtocx8zTUsQZRmlysLEf088vzt7ULemsww9dtGYP5vjIT0WFVPlC2R0n1Bs2lo1m9fDF2%2F7PTbQVxqdUHuMmQL4mXtaRa7YdPav0bN%2Filr26k2OToCdJh%2Biz%2BBzP2Uf444sjXa4j7oRM3weltV%2BSh3YGrrbV68XKZvSshe3bLTeov4g2%2FhMJHl28kGOqUBH3%2FuLT1YT58kyz5Xcsy9K276L7K2jG4olhzwdCin7G9tu5ekPyNN8VJPkVf6%2FM3zIGhHmry4d2pKGSxBoYHmDWgZG4zJaDDx6XzqquY6ghNg1GZSUI4%2F1V84O8eNOu%2FFg2meAaJC9BSQAFyx9Dbllxk5yxxBa8PgnddnrPPLjY1KHDwYt4A25Yw%2BG%2FgkQHpK%2F2z1KLY31%2BlROOrTSUwUSlYUUNpQ&X-Amz-Signature=fbea9d5acdc2b1484afc53e68463f501c39cf3973c475d9f22edf6fcabb2aa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

