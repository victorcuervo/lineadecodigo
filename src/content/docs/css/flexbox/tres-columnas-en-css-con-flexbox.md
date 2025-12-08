---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2POFH6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBREhjdVkyC0bSEabT0GZaHxNP0o%2FVKH1ooY2%2FTNReDwAiEA2AzTpj5v%2B6V2eOadxjRSPomIyLbYWSFzZyEbOVdNA%2FkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd%2BJILgpQlupn2YVircA2LQzaFepZ5DbkeFXkItDhBx7lV7wY%2FedX8T7FRmQE0tGVPLJKsPzzq2JxObrV45pUhyJ%2FwYRRssJocMXNuf8fdZQyEiE9Uo%2Fd%2Fmlq%2FmB%2B4xDtM4VWUFiuo1HN7rXcUiy152ktuBDTMRUFdCZoOBJs0x8xW9ZwlbfftmfjjAn3PylWWyfjkeikKUgOaAp6H8Yii9t87%2BsUlQUl%2FB4YygFUS4BEQd2LGHq4cyIOWtn7rUXk4Efuzc1kPzUmQHJGXj0PRa%2Bn4JaKyOuy%2FUyo4VgndAsXdc5jpvZrVxXppEkqok8XNxXcg92Ni%2BSgf1AmJNvSi3YvbbC3xy2y%2F50tTwTce9ipgOEG0pTLm8rKrzfrAP4aAebnSSx%2FgmadeNXCKFoMWVkEGSDvTtVgTZ94B8NR7QOJ3wcXTBhmvo0J8%2FxOtfdtTpU7KZBtFdXYFNliTyt7OrUexBduEHTvcruMhXgSFPL9EKS5NXPJ8jQa8pwmFjHFjHxcoLEsiOtUagjTeXczuIMRj4NFWBn9P214gn2hTSWASJ%2BrtqMUOv9cxtX7IkLu6EDHKzADmhDp1vGFIrSUhdA7SYWbJt1laquGHvTpzvcOm7waxSrPyozLqJwhSyuONr00m9iB2Qm%2FV4MIS02ckGOqUB8K98xFMINN5tWgCRVUZwNGl0QfdywxmR%2FBUXNOHk4%2BnOgaR16OROMD75yCF4haP3sf6gzqhcXkzehwj7uchVpc6D1zzACN98A0w%2BdH8gAZq6BT5r1xgA%2BpEVx83BkVvVriYwPzQhKL9RCrjb030AQXbT2IMd1P6kYu8YWoZeTdaPhi62qN3nPeQQBP847eyYae8AZyFKqkuozy%2FVW0GrqWJcSE7u&X-Amz-Signature=3c0ec58ec1147d31368f0ac04637360de6ad46708cd40184b23a9371cede9d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2POFH6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBREhjdVkyC0bSEabT0GZaHxNP0o%2FVKH1ooY2%2FTNReDwAiEA2AzTpj5v%2B6V2eOadxjRSPomIyLbYWSFzZyEbOVdNA%2FkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd%2BJILgpQlupn2YVircA2LQzaFepZ5DbkeFXkItDhBx7lV7wY%2FedX8T7FRmQE0tGVPLJKsPzzq2JxObrV45pUhyJ%2FwYRRssJocMXNuf8fdZQyEiE9Uo%2Fd%2Fmlq%2FmB%2B4xDtM4VWUFiuo1HN7rXcUiy152ktuBDTMRUFdCZoOBJs0x8xW9ZwlbfftmfjjAn3PylWWyfjkeikKUgOaAp6H8Yii9t87%2BsUlQUl%2FB4YygFUS4BEQd2LGHq4cyIOWtn7rUXk4Efuzc1kPzUmQHJGXj0PRa%2Bn4JaKyOuy%2FUyo4VgndAsXdc5jpvZrVxXppEkqok8XNxXcg92Ni%2BSgf1AmJNvSi3YvbbC3xy2y%2F50tTwTce9ipgOEG0pTLm8rKrzfrAP4aAebnSSx%2FgmadeNXCKFoMWVkEGSDvTtVgTZ94B8NR7QOJ3wcXTBhmvo0J8%2FxOtfdtTpU7KZBtFdXYFNliTyt7OrUexBduEHTvcruMhXgSFPL9EKS5NXPJ8jQa8pwmFjHFjHxcoLEsiOtUagjTeXczuIMRj4NFWBn9P214gn2hTSWASJ%2BrtqMUOv9cxtX7IkLu6EDHKzADmhDp1vGFIrSUhdA7SYWbJt1laquGHvTpzvcOm7waxSrPyozLqJwhSyuONr00m9iB2Qm%2FV4MIS02ckGOqUB8K98xFMINN5tWgCRVUZwNGl0QfdywxmR%2FBUXNOHk4%2BnOgaR16OROMD75yCF4haP3sf6gzqhcXkzehwj7uchVpc6D1zzACN98A0w%2BdH8gAZq6BT5r1xgA%2BpEVx83BkVvVriYwPzQhKL9RCrjb030AQXbT2IMd1P6kYu8YWoZeTdaPhi62qN3nPeQQBP847eyYae8AZyFKqkuozy%2FVW0GrqWJcSE7u&X-Amz-Signature=9b9ebfd5fa18834c9078616798da14c7cbb766ed279bec753d4cf2dd9131a89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

