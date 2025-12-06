---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYREVOXR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCdHEkJ6jo3U%2BLor5%2BKYXXQLAjInD5nVGF%2BO9YjjsDwIgSf0c9kKJB6zx5sEpQk3lcH7kg0xjJQALgVCMyXrv9%2BYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMf3q8%2FvX4%2FhQTLloircA6XM7pvb9x29VZ83WLE275MmAd7t%2FFJitOgZUvF8A5j21K%2FbUxUuQHUT6OompCAJjjVcDspjBkufN%2F1G0drE%2BgRUC0c6T4mUY7G1kjbrM4IiSYQW9Sm0qN5NFl12pBkcJh8v4G7%2F56EwX65XkRYUZrUhh6gYtkL5vElLbnxgZMDPKsMeyVak%2F7UsJQkMQFIAaToYzt57OgbzTRdDSOcHUAT5BhOoN%2FgatQ%2BqJWqd5yha7p1JFxRkpKn5%2BFst%2Fd%2FEpsqy67fTG%2F3qJzlwswT41OQYD1WRQWDbCHPXE2K0Q8SYiG%2BhhPEqtL6q59NQoCliH%2Fl1Fj2fn0U1HZwcVJd9CRtrR0heU%2FCA%2Ff4Z0FyCJ%2BzLoOWIhLG67C7EHFTZc%2F5%2FxJq5GNIU0xa9acQEjVOv5Hx26iuciDpr2cbluv4XakuzqHRcRItyn6phWnjzIojazrGpHWB%2B2PWyi4tCjeASWxvdryoSlmsue0XMmlk9IjvZZkgQzwjbRRhbGGjPt8gHraX9KsDtWwV3x1BpDvtIvMQIGzsVoJkCeFH2KEEQ1TiIawOWFzpH93ZqZXxGYtPnKiPh4BsC4b0sCuPAFuMNkWZS6yZv5tv4k%2FkmqMdYjY7mRISLa5bDcmM1kmgYML3GzckGOqUBNKsDNPJdsCFcGKeqiE122R6639Wvhe2CrQUgnBfv%2FRdRMj9OLSnuO%2BXiZb2iPCewEzzB5oplxCL%2BwU9WtWv%2FEZBP6HJ4E5VzNX9WbIbRDO%2B4S8sb%2F6SRahTypngKlJxInVam23zOmE%2FMYRZ30PEYY%2F4fqepcBEu06x3je3gEWjg%2BAAQBA4yxdJBQ9tcW5WU0WcbYFD0PmFL2EzCCL1hDyqZuT5lJ&X-Amz-Signature=a7a467bb9cfa3cbe96a7ca09338bf2920bf4000d7f105378b3a640189b8e77eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYREVOXR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCdHEkJ6jo3U%2BLor5%2BKYXXQLAjInD5nVGF%2BO9YjjsDwIgSf0c9kKJB6zx5sEpQk3lcH7kg0xjJQALgVCMyXrv9%2BYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMf3q8%2FvX4%2FhQTLloircA6XM7pvb9x29VZ83WLE275MmAd7t%2FFJitOgZUvF8A5j21K%2FbUxUuQHUT6OompCAJjjVcDspjBkufN%2F1G0drE%2BgRUC0c6T4mUY7G1kjbrM4IiSYQW9Sm0qN5NFl12pBkcJh8v4G7%2F56EwX65XkRYUZrUhh6gYtkL5vElLbnxgZMDPKsMeyVak%2F7UsJQkMQFIAaToYzt57OgbzTRdDSOcHUAT5BhOoN%2FgatQ%2BqJWqd5yha7p1JFxRkpKn5%2BFst%2Fd%2FEpsqy67fTG%2F3qJzlwswT41OQYD1WRQWDbCHPXE2K0Q8SYiG%2BhhPEqtL6q59NQoCliH%2Fl1Fj2fn0U1HZwcVJd9CRtrR0heU%2FCA%2Ff4Z0FyCJ%2BzLoOWIhLG67C7EHFTZc%2F5%2FxJq5GNIU0xa9acQEjVOv5Hx26iuciDpr2cbluv4XakuzqHRcRItyn6phWnjzIojazrGpHWB%2B2PWyi4tCjeASWxvdryoSlmsue0XMmlk9IjvZZkgQzwjbRRhbGGjPt8gHraX9KsDtWwV3x1BpDvtIvMQIGzsVoJkCeFH2KEEQ1TiIawOWFzpH93ZqZXxGYtPnKiPh4BsC4b0sCuPAFuMNkWZS6yZv5tv4k%2FkmqMdYjY7mRISLa5bDcmM1kmgYML3GzckGOqUBNKsDNPJdsCFcGKeqiE122R6639Wvhe2CrQUgnBfv%2FRdRMj9OLSnuO%2BXiZb2iPCewEzzB5oplxCL%2BwU9WtWv%2FEZBP6HJ4E5VzNX9WbIbRDO%2B4S8sb%2F6SRahTypngKlJxInVam23zOmE%2FMYRZ30PEYY%2F4fqepcBEu06x3je3gEWjg%2BAAQBA4yxdJBQ9tcW5WU0WcbYFD0PmFL2EzCCL1hDyqZuT5lJ&X-Amz-Signature=978a13de44093f86f0849f089b88d53cf85987d161c8a30cec3f36e9aa837ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

