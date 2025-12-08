---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMVCQCI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO6VirhsBQoZOPW8IVNKpsbUA1LuTTugA7QkhAOUp3DAiEA8yVSAaJwvUb8kBl5KT3UtTYZ4ItieLPSJpRZvi9VnnIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvN0IsAaEvU1fYrpSrcA%2B6vCir0mxDchktTgHlvpx8WK6YQx%2BJj7fBupfVnlXprFRsdnBR5Q2tPBTAPinH27LlL8Aw0ORUox9gVpadIi%2Fvg1WCF2HaSySu%2BeaVewq4dnXrT77IKkGkaE3G%2B3gQHJ3G2NoZInBmvUGtY%2FayOp7Cq39Layu5OxmR%2FpBcYDDuzdsvwYYfUgDP3AoAjQpfMJOiu%2BlRnfeFjYV6ZUKfuO8%2Bw7nSGxc4WZnnrdVxhO%2F4798vusKd7jLh1b1PEdyVRGvZSw7fcA9qSqcV%2BS2CyhgaqTDyn5rc20%2BxIx8oqmTlBonxR36aB7NU4fnOhsSmMlWdRFDn7ms3ox2TaZsT7%2FTxJqozDJ8jyFPZcsBD09WKCCs%2FG1BWKcGUIdO%2Fd1SJSHnOhbCfm4Qcftbwip0sBsv4YmjM3WKalAFiYOvl3yFkdr3OmUOPJ72JF4YH0%2By6oQV7sWODXsRfF3ZR642UbMxAyzm3FrLYZmoVEsml%2Bk2aJDvSNhZ9MtJf%2BOWE%2BCtgCzJZUaxAoED23gheM%2F9NyCrmjFtN5%2FFUCHCFxNVicpYeF8k3QF4y0UblnzAmz5F8l6AubiT0otsfywdBVcDkqHzBgSR4UnsEwpGXxArlk5H6jIgiXT2oiCmURpPmWMNrd3MkGOqUBEC2AhLa3FSDtHn1Lrf%2FMnMvL%2FGht53vAgEyIhAIPWEVL5kM4Phcl48jyxjfMFKEpQF9FJx2zP3ndBMqyKJ4acBi%2B6QMifJU1%2BlHtmRunHHWPbvztks%2B01VFSZXhcbUrVJefyRuQUXaHLNiv%2FYi38%2F1jklIyp2gw1JEsj%2B9w9uUhMf8sbS16ed24mib588r7Jd%2FSOTCzd2369lLEq4KACMoRGOqOi&X-Amz-Signature=40708314b71198aff0a04f3c70c6f6b2815417678db139e2d443aefca3c2a808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMVCQCI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDO6VirhsBQoZOPW8IVNKpsbUA1LuTTugA7QkhAOUp3DAiEA8yVSAaJwvUb8kBl5KT3UtTYZ4ItieLPSJpRZvi9VnnIqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvN0IsAaEvU1fYrpSrcA%2B6vCir0mxDchktTgHlvpx8WK6YQx%2BJj7fBupfVnlXprFRsdnBR5Q2tPBTAPinH27LlL8Aw0ORUox9gVpadIi%2Fvg1WCF2HaSySu%2BeaVewq4dnXrT77IKkGkaE3G%2B3gQHJ3G2NoZInBmvUGtY%2FayOp7Cq39Layu5OxmR%2FpBcYDDuzdsvwYYfUgDP3AoAjQpfMJOiu%2BlRnfeFjYV6ZUKfuO8%2Bw7nSGxc4WZnnrdVxhO%2F4798vusKd7jLh1b1PEdyVRGvZSw7fcA9qSqcV%2BS2CyhgaqTDyn5rc20%2BxIx8oqmTlBonxR36aB7NU4fnOhsSmMlWdRFDn7ms3ox2TaZsT7%2FTxJqozDJ8jyFPZcsBD09WKCCs%2FG1BWKcGUIdO%2Fd1SJSHnOhbCfm4Qcftbwip0sBsv4YmjM3WKalAFiYOvl3yFkdr3OmUOPJ72JF4YH0%2By6oQV7sWODXsRfF3ZR642UbMxAyzm3FrLYZmoVEsml%2Bk2aJDvSNhZ9MtJf%2BOWE%2BCtgCzJZUaxAoED23gheM%2F9NyCrmjFtN5%2FFUCHCFxNVicpYeF8k3QF4y0UblnzAmz5F8l6AubiT0otsfywdBVcDkqHzBgSR4UnsEwpGXxArlk5H6jIgiXT2oiCmURpPmWMNrd3MkGOqUBEC2AhLa3FSDtHn1Lrf%2FMnMvL%2FGht53vAgEyIhAIPWEVL5kM4Phcl48jyxjfMFKEpQF9FJx2zP3ndBMqyKJ4acBi%2B6QMifJU1%2BlHtmRunHHWPbvztks%2B01VFSZXhcbUrVJefyRuQUXaHLNiv%2FYi38%2F1jklIyp2gw1JEsj%2B9w9uUhMf8sbS16ed24mib588r7Jd%2FSOTCzd2369lLEq4KACMoRGOqOi&X-Amz-Signature=a3d35543fcb48048dab9652be03598b33dea586732bd54e233165097a6e96b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

