---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLJC4ZL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCDkBZ7M7znzCOc8Ghs1Pr%2BYzGJWh85KvOecojuJVXNAiEA5y6St5YYjg6VfQQhx3LGKRv0b22ohhWmic11HtMQnoYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeoFuQ5%2Bd8A1dfTGCrcA4XUQ3SdP7gXlQIpYDozGnMPeOw7CrVwUjTSQuqy8fRY0%2B0ilB613TASkIyEsbADk5%2Bt4Hsu%2FBntbfsoPwC%2F0HfOCO1Vno8M2pu5kTEalktfS0ENIvqp7JYYsqS2VnqQqJYDgtFIWz72v4fhVDPFptjp3c1l2uzOs2Em3FkEWQXawe0qyQK4trinnQRBnn0qtFqoBbbk%2FIwBQDP9hB6E3a4N2Vw18cq%2Fqzy0AGuOW5hRRG6z8olE%2BNHLnDKAJ9jgIg3mf5OOJde0ur1EJerMwijp62sMmAzLHGWciqdVTDc1WpIeiDX61NS%2F3d7MsaN7Rf9RvZSLNjLsURN6vppRA5t%2FFNLBwT1djDCFkLPy5u2SotirbyXH3BnvOTcJHf6RFdT747d7Uzq4o3G8B39GFl4HP2rjbk0lQP%2B2hPUP0IpZqdzUS8%2BPTQO8uf6cD8lz%2B8Bnrvb%2Bfa7IOEb3nZl5omrfXDviEMJsOmTKVUbGHVrqA6%2F929Ckle7SWnwbGDWN0nQyqfDW4J1u3EDNankAZeC4xhzApUkvX1l1WrwDesy37L8zV3Xy2OB0%2FcOKVZ5MLQQkdix7fbdtkivf4kiH6mR7rRVTUB6CnII0oW9fCkOh79VeRc30ZSbYowgMMLK91skGOqUBYvI0bZWU5KOpgVoEyhzjqNV2eZRwIO6fRYr54zlPVjl1XM2OFNlygGJ8H4LSuNzuZT8aEaCpJaQLy9oqknPfffezUZJH5YfmDrl57CfjWriZFemMlvfDm9bRTTc1trt7YANcddudM4wGDeqq7p0Q1oeKCfg%2FDlyUJZIqBrOZLfoZpSfu%2F9lEUTxs6uIIMDQBfJf5Esx9YCj5y%2F%2BUtX%2F8Lq%2BwGhEt&X-Amz-Signature=a2e05b48a9ec46b2e38954eb4c0f891dd642b836b8c6d48ab9e3d534473490c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLJC4ZL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCDkBZ7M7znzCOc8Ghs1Pr%2BYzGJWh85KvOecojuJVXNAiEA5y6St5YYjg6VfQQhx3LGKRv0b22ohhWmic11HtMQnoYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeoFuQ5%2Bd8A1dfTGCrcA4XUQ3SdP7gXlQIpYDozGnMPeOw7CrVwUjTSQuqy8fRY0%2B0ilB613TASkIyEsbADk5%2Bt4Hsu%2FBntbfsoPwC%2F0HfOCO1Vno8M2pu5kTEalktfS0ENIvqp7JYYsqS2VnqQqJYDgtFIWz72v4fhVDPFptjp3c1l2uzOs2Em3FkEWQXawe0qyQK4trinnQRBnn0qtFqoBbbk%2FIwBQDP9hB6E3a4N2Vw18cq%2Fqzy0AGuOW5hRRG6z8olE%2BNHLnDKAJ9jgIg3mf5OOJde0ur1EJerMwijp62sMmAzLHGWciqdVTDc1WpIeiDX61NS%2F3d7MsaN7Rf9RvZSLNjLsURN6vppRA5t%2FFNLBwT1djDCFkLPy5u2SotirbyXH3BnvOTcJHf6RFdT747d7Uzq4o3G8B39GFl4HP2rjbk0lQP%2B2hPUP0IpZqdzUS8%2BPTQO8uf6cD8lz%2B8Bnrvb%2Bfa7IOEb3nZl5omrfXDviEMJsOmTKVUbGHVrqA6%2F929Ckle7SWnwbGDWN0nQyqfDW4J1u3EDNankAZeC4xhzApUkvX1l1WrwDesy37L8zV3Xy2OB0%2FcOKVZ5MLQQkdix7fbdtkivf4kiH6mR7rRVTUB6CnII0oW9fCkOh79VeRc30ZSbYowgMMLK91skGOqUBYvI0bZWU5KOpgVoEyhzjqNV2eZRwIO6fRYr54zlPVjl1XM2OFNlygGJ8H4LSuNzuZT8aEaCpJaQLy9oqknPfffezUZJH5YfmDrl57CfjWriZFemMlvfDm9bRTTc1trt7YANcddudM4wGDeqq7p0Q1oeKCfg%2FDlyUJZIqBrOZLfoZpSfu%2F9lEUTxs6uIIMDQBfJf5Esx9YCj5y%2F%2BUtX%2F8Lq%2BwGhEt&X-Amz-Signature=e443a2fdd2409d7cba3f5d548348dd7e4d1cd86c98eb1e58f8e19ea8d88bc5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

