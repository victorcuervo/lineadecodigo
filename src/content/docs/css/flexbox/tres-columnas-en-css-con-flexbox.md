---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBQ2B2A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlJ3JeBnNe7j4ZdxmnRzYmIglcZWvOYKWwVIAdTfKFQIgUpGtzZ7P3Vz%2F08aZT79suZbaNxWLYFFwZpHIqzsMutkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp3HfgWNEcFLGouWSrcA5v4as2I5YJaSlGST50U272dmj%2B%2FWku36%2FoGxqFCWycR4BiCIJQA86ekBDQudjK%2FshoKPpKz8TrxVsRQbPEjX8bioKDcTIraZbdGs%2BIQRKgiNsiHhpOZL4ySB%2BwG9BHZEkuVqV9tRNE4odpW%2Bx8nt4g2gHsOH2%2F6mr3%2FooMno3wj9MsF2L%2F2kCvpBppUqmCpI0rleQp3ZV0opCbkCiD61CEcKTctBf5KqUdZXYO8BC2Syt2iYB5LUboG44DrDxNCVltMA3uUYTAUuqsqt43naA9M37VIc9jyh1OOLsinkGghAwrzMRMIvf3DqHY51Duf86Jd12OhSjp0TpJjXTefqBsWiPrrAqfACae7yF2K7KJpc%2BpIqNz4F0xZVYtjfuxHN%2BjYBAOY3n93OWTvyp4xRCCqQIm9LlF2FtmW0b7XN0EDZhY23KvYMDSnjvr3Lzv%2FDsDxlSLW85Wf2GbIni1tT%2F0TazrXwmQFAYU0gYtqYL8NHgvrBEExHfWPYQDvhBzYXOMO172YVLYGKDdA7Gw854HUw9Vr%2FwdgaT%2F6cm6%2BbEWL%2BG7P6ipZt80NP%2FBARVxwGEOugG7%2B%2FrPSzCWtwd4toWD8anjXs40esAECj1Jj2G37NMba348saArBZEjmMLDt2ckGOqUBAjLObzeuSe9X3x4PMKtQJq3DnBitchvw1gJD6O%2FKL%2F3etYQFAGNDhU0FfmLaCoZYKqt%2FmPq7HGajw1gOuqpQp7i54xfOiofTSrpcDqRoi6HCP0DM60xVYzNMOsZ8VhlwpHNZp6QLdT9ItNP%2FUQdnxNPDjTO7KRb6%2FSbmxtuMRt%2FK3joBInJe9haIDxqaFcIsU67P89pLEroIxJxWJMll7EUykbSc&X-Amz-Signature=c694fdae541a090786f2ceca67dbfc1dea7a00dfd722fe76f1f383570a9d240d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBQ2B2A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQlJ3JeBnNe7j4ZdxmnRzYmIglcZWvOYKWwVIAdTfKFQIgUpGtzZ7P3Vz%2F08aZT79suZbaNxWLYFFwZpHIqzsMutkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp3HfgWNEcFLGouWSrcA5v4as2I5YJaSlGST50U272dmj%2B%2FWku36%2FoGxqFCWycR4BiCIJQA86ekBDQudjK%2FshoKPpKz8TrxVsRQbPEjX8bioKDcTIraZbdGs%2BIQRKgiNsiHhpOZL4ySB%2BwG9BHZEkuVqV9tRNE4odpW%2Bx8nt4g2gHsOH2%2F6mr3%2FooMno3wj9MsF2L%2F2kCvpBppUqmCpI0rleQp3ZV0opCbkCiD61CEcKTctBf5KqUdZXYO8BC2Syt2iYB5LUboG44DrDxNCVltMA3uUYTAUuqsqt43naA9M37VIc9jyh1OOLsinkGghAwrzMRMIvf3DqHY51Duf86Jd12OhSjp0TpJjXTefqBsWiPrrAqfACae7yF2K7KJpc%2BpIqNz4F0xZVYtjfuxHN%2BjYBAOY3n93OWTvyp4xRCCqQIm9LlF2FtmW0b7XN0EDZhY23KvYMDSnjvr3Lzv%2FDsDxlSLW85Wf2GbIni1tT%2F0TazrXwmQFAYU0gYtqYL8NHgvrBEExHfWPYQDvhBzYXOMO172YVLYGKDdA7Gw854HUw9Vr%2FwdgaT%2F6cm6%2BbEWL%2BG7P6ipZt80NP%2FBARVxwGEOugG7%2B%2FrPSzCWtwd4toWD8anjXs40esAECj1Jj2G37NMba348saArBZEjmMLDt2ckGOqUBAjLObzeuSe9X3x4PMKtQJq3DnBitchvw1gJD6O%2FKL%2F3etYQFAGNDhU0FfmLaCoZYKqt%2FmPq7HGajw1gOuqpQp7i54xfOiofTSrpcDqRoi6HCP0DM60xVYzNMOsZ8VhlwpHNZp6QLdT9ItNP%2FUQdnxNPDjTO7KRb6%2FSbmxtuMRt%2FK3joBInJe9haIDxqaFcIsU67P89pLEroIxJxWJMll7EUykbSc&X-Amz-Signature=02f6b05ffdb0f0777fba84206f0f806b3e0d62aa2a2befd362df3e06896dca54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

