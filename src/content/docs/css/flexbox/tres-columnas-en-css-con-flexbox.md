---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTYA74T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLmnVvVsHZ6AR%2FjVMfKNyDSTfPC6LfeXGCPl1VaqxSwIhANDwB0rSOC%2BPv%2BI77FajUEjdPAHox9yknO%2BU5ECpM6E6KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDVc862dVf5%2BqydKcq3AOzuVxWszcTx26360Siej6wpqrU4ajPPfCJBgmHmepDktiSH5i2yy4gREfOlJAlEk%2BVItssbb1p6eHbxMs6hjI%2B9IbXafLM953wJaQH81%2BQUmBCreMAL7y%2BaBZwz65cOd0Yn0%2F2qqSC%2FmHnQ9UqgM54uGwVtTzGEYHy57%2FX1DAE%2BPdk9es4D%2FSXbzqM3G33wjD3AfWvxARSq9knKgSpN0U%2Bk421WB43QTM6knMd%2FxOroyK0fZ55kcl8koiiJJQ0zWeanMx5aNhgNxVUjVBgl0b7sU2Hmr947wwnXMdvYRyMecDrTOzFTv0yKJ5FExLm%2FjoWZOeyPo0dRNM5er95N3UzaSFOoURHPkOIeCOQs2%2FwBNZLTOdJ8se%2F9EXxAgxzLEHXVGAEqNW%2BIGvCOTz2UuiDHCBKLbcxbH9Jl9HUK4kEr9BuVap1sRwZDKVxAzQv2RX4BvippFxqK%2F0Octp0Eg91%2BCsLUHS4cD%2BFFr6XVPtqbCOds4STQ%2BBLKdSoYYA2Ma83jwoylg2xnCRRpxMLst9oBVuh4M%2Fz7bgLJiZYZENgTJ2hl15PCTi%2Biutg7AgYt%2B%2FT6%2BFO7uFexzY2DUQlnTINe80X6knq00k%2FTB9xDcL8r50VAmzgHXskE3uZvTCAm9XJBjqkAYd1YQSuGFBNUTaA7tFmta%2BrX1eE1jPvGzL16eyMGzlvyiESVJQ0COeIRSotqnMT0ORLsHBpWG18ZqjUuMdzEkOZfpf45EyPVBRVOzDskZYx8jYFBLmsrWBpUYLPVsnCftWNMp4im0UaHVEwCF%2FhWB4DuFAU9EziHcQCdaHCZrRIphhm13teJHXjIGcMWP7uv6vZZP2ZBXZqBOiXebrAwNOk%2B1VF&X-Amz-Signature=4dfd04dce2b18b0787f9e82b1758ff939b76ce31d65d7924557cd3479facc923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KTYA74T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLmnVvVsHZ6AR%2FjVMfKNyDSTfPC6LfeXGCPl1VaqxSwIhANDwB0rSOC%2BPv%2BI77FajUEjdPAHox9yknO%2BU5ECpM6E6KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDVc862dVf5%2BqydKcq3AOzuVxWszcTx26360Siej6wpqrU4ajPPfCJBgmHmepDktiSH5i2yy4gREfOlJAlEk%2BVItssbb1p6eHbxMs6hjI%2B9IbXafLM953wJaQH81%2BQUmBCreMAL7y%2BaBZwz65cOd0Yn0%2F2qqSC%2FmHnQ9UqgM54uGwVtTzGEYHy57%2FX1DAE%2BPdk9es4D%2FSXbzqM3G33wjD3AfWvxARSq9knKgSpN0U%2Bk421WB43QTM6knMd%2FxOroyK0fZ55kcl8koiiJJQ0zWeanMx5aNhgNxVUjVBgl0b7sU2Hmr947wwnXMdvYRyMecDrTOzFTv0yKJ5FExLm%2FjoWZOeyPo0dRNM5er95N3UzaSFOoURHPkOIeCOQs2%2FwBNZLTOdJ8se%2F9EXxAgxzLEHXVGAEqNW%2BIGvCOTz2UuiDHCBKLbcxbH9Jl9HUK4kEr9BuVap1sRwZDKVxAzQv2RX4BvippFxqK%2F0Octp0Eg91%2BCsLUHS4cD%2BFFr6XVPtqbCOds4STQ%2BBLKdSoYYA2Ma83jwoylg2xnCRRpxMLst9oBVuh4M%2Fz7bgLJiZYZENgTJ2hl15PCTi%2Biutg7AgYt%2B%2FT6%2BFO7uFexzY2DUQlnTINe80X6knq00k%2FTB9xDcL8r50VAmzgHXskE3uZvTCAm9XJBjqkAYd1YQSuGFBNUTaA7tFmta%2BrX1eE1jPvGzL16eyMGzlvyiESVJQ0COeIRSotqnMT0ORLsHBpWG18ZqjUuMdzEkOZfpf45EyPVBRVOzDskZYx8jYFBLmsrWBpUYLPVsnCftWNMp4im0UaHVEwCF%2FhWB4DuFAU9EziHcQCdaHCZrRIphhm13teJHXjIGcMWP7uv6vZZP2ZBXZqBOiXebrAwNOk%2B1VF&X-Amz-Signature=5a15c2a092bde2510a984737d336d5f827123bba3e95a5560c79e50caad9673d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

