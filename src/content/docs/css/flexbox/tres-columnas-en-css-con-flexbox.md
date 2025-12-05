---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676YU5VB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1ujfjt5QFgOPoARWxiB2o7L2gHQMFHUL0OPsWLllh1AiEAzHdq6EKaeEAfpNVPiyFxjGEojNVkSXqy4yOIOHbvRncq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNr3f63wI5MsAzPpfircA%2FJxcrkP%2FUIRmocyxIDwp1Wx2I83vJSuuOL8Pf7xBbDGIPBGviG6eEOivXnAiF1n%2F07P0Va5Vvi7%2BJK5qLtr0F2YY7spJ5deyA1SPxbQpwGu41ieyRoViT%2FdqmV8coKvCdqbyF%2FBaCzSAYRGWLDsV6jXJAgdLM7WNDdmd9EIcoxwdI4Huc3RslniWmdD%2BjpL%2FsAXUBFp4M7GqBao61w6atDW2BMaGWXAry4q3Yqq%2FHbqMxMdHTLx2Rzg1crOtDbObfRuyArIPdU92Dw%2F%2BelK1WLDLrAdVWDfE4Q4r%2FeKKPcFA41UwP6YiFjh3eTU6owR7Ic3CCwG4fLJ4syTuQTTvp7mMewcKnQfZiEh9lmpoYfBceCMq87bBgDoF7iFIFPofLbhmE1qssHkaorrP%2FMlnPvRQSbtIYcdiyoxI8exKutBte9TPql99WGQ%2FmhML6r1M%2B3fxp3%2BsBVa5aD0hmplNLo5I9vDphyEUr3l8Bmxnrk2vApM2%2FiUP2HUN5l7MqbkqDCF6w%2BwVyQPbfxJ3YlH%2FH2sS6sNMdQR0wh5w4LcokZf1MQPlyOPV%2BzfkSSgAqip2GcqOVf2ozyidwag8p%2FH8%2BO1AAgNly2Kt%2BU2vB4sxME1jdGSOfjpW2imlq1vMJ2QzckGOqUBQIAdvynqB1LrJVa%2BBF%2BLFbSVZ6PI1faZCB4V8ZKAnEy2jpvJZs1nMAxQ8C4bxhZ2K8wyEYYE9XYBJ7PJeI%2BKvtp7u7WHHBbSaaY8fkpGyPmhLlPPBcC9Yjgh%2F5vyO46sYlLG%2BZnocQUtl%2FiHXIIxpNaDqLmjWBrgDRTQQn3SsZk%2FDaJWMKZv5JVRHdIpkuAAkxehB01PLvy87ViKe1%2FdEBpn1DF%2F&X-Amz-Signature=6c7c6913f55e03c081cb000a46ef7fd1139831255850851581bf26d01b71b3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466676YU5VB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1ujfjt5QFgOPoARWxiB2o7L2gHQMFHUL0OPsWLllh1AiEAzHdq6EKaeEAfpNVPiyFxjGEojNVkSXqy4yOIOHbvRncq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNr3f63wI5MsAzPpfircA%2FJxcrkP%2FUIRmocyxIDwp1Wx2I83vJSuuOL8Pf7xBbDGIPBGviG6eEOivXnAiF1n%2F07P0Va5Vvi7%2BJK5qLtr0F2YY7spJ5deyA1SPxbQpwGu41ieyRoViT%2FdqmV8coKvCdqbyF%2FBaCzSAYRGWLDsV6jXJAgdLM7WNDdmd9EIcoxwdI4Huc3RslniWmdD%2BjpL%2FsAXUBFp4M7GqBao61w6atDW2BMaGWXAry4q3Yqq%2FHbqMxMdHTLx2Rzg1crOtDbObfRuyArIPdU92Dw%2F%2BelK1WLDLrAdVWDfE4Q4r%2FeKKPcFA41UwP6YiFjh3eTU6owR7Ic3CCwG4fLJ4syTuQTTvp7mMewcKnQfZiEh9lmpoYfBceCMq87bBgDoF7iFIFPofLbhmE1qssHkaorrP%2FMlnPvRQSbtIYcdiyoxI8exKutBte9TPql99WGQ%2FmhML6r1M%2B3fxp3%2BsBVa5aD0hmplNLo5I9vDphyEUr3l8Bmxnrk2vApM2%2FiUP2HUN5l7MqbkqDCF6w%2BwVyQPbfxJ3YlH%2FH2sS6sNMdQR0wh5w4LcokZf1MQPlyOPV%2BzfkSSgAqip2GcqOVf2ozyidwag8p%2FH8%2BO1AAgNly2Kt%2BU2vB4sxME1jdGSOfjpW2imlq1vMJ2QzckGOqUBQIAdvynqB1LrJVa%2BBF%2BLFbSVZ6PI1faZCB4V8ZKAnEy2jpvJZs1nMAxQ8C4bxhZ2K8wyEYYE9XYBJ7PJeI%2BKvtp7u7WHHBbSaaY8fkpGyPmhLlPPBcC9Yjgh%2F5vyO46sYlLG%2BZnocQUtl%2FiHXIIxpNaDqLmjWBrgDRTQQn3SsZk%2FDaJWMKZv5JVRHdIpkuAAkxehB01PLvy87ViKe1%2FdEBpn1DF%2F&X-Amz-Signature=91c5cc3960f28fd9b443c693849b01d8018bdb206af647a98fcbcf7688630972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

