---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMZQ3ES%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4U1MS0xNUS%2BtySEPeAI8iF%2BaJ4TmcEYpTwe3gWw3mPAIhAO0HouHQQl%2F6C8kuHV4NTMgZ62HQukm74oVXFa29gz9ZKv8DCDkQABoMNjM3NDIzMTgzODA1Igyphw7CL%2FzKtnhrFOcq3AMF4%2FQTWrh1h9o35%2BELCdttN9mn%2FQoJEA0%2BMdVXdlCABYBld8ufkLJC3IaVnBu6rwLzON3cKXMkfBV2B4NqmYzABpO3dCIVMnUPnkvlnj2GWxgX92mKbRcn%2FkfiD%2FsVI0JlUG%2Bqj%2BVQAt0i7jPxyaQUy481Nc8%2Bw1xde%2FkbaxbX7axshamq7w5vpOq6hpVX4m302mrLqZXkxYGmDJrcG6dSxLuucn5f1G1wJrGF%2Fk44etPkbiDC97N1vG6ocTLwl3Cgnp6st2Bj5Rxgtzp53lAIZmbr5ZFxhmlGEzwTpO8yQ4wkFj25K4HpZJUVDFhLtQgOCrk8XwK1S67fTJ%2Fxb%2F0dq22Bko8bIv40DI6XWAwAI8JmekCOaprgdFiA9UVfh20Ki3KuCS8nflqHms0iZN3bz7Ha%2BFnFaF1UZQAluRR7SoF9xJtx6EL0SA61ubBL9uRkTZI%2B%2BXvKsTh8pJEVMOKn7jGyaELM2TMJ93Jd5Hu%2FH44%2B89vuyT%2FZ1WmpgymobfaABseGUL4z%2B9O8J55E5YKtwN5iBzHEjrqIQ85YKRCwmu6c96h6MPvhSjMNL7kByULbI3UkjlAGxi2XSfqqqlnpk63xXulywhQHHf6VAkHuCn6VAZEvlBeH6FvofzCplcPJBjqkAfq%2F%2Fb1i2%2FpKj8E4Gpu9gCHygsqaR3OIrYbfMt8jvJoqtofnjWIcamq6Vc5omL7YtADd%2BjqAozmI55lodeADcP9ExI%2FE6z5lQugDhczFK0LiEiILCx0DwNyvJpGOX3TDTd5znTdxpr7B5Be5nH2q77U7TZPFjdAX3HqoRyQgivGsjTwc1W%2FVJgbmnWiYYNj7aT3hF%2F%2FT9ZODje4QMW9a%2F5sm4ITm&X-Amz-Signature=830dc306257cce7986d500deaa55eec4c060f84c94572c1f3635c2d4441cea68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTMZQ3ES%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD4U1MS0xNUS%2BtySEPeAI8iF%2BaJ4TmcEYpTwe3gWw3mPAIhAO0HouHQQl%2F6C8kuHV4NTMgZ62HQukm74oVXFa29gz9ZKv8DCDkQABoMNjM3NDIzMTgzODA1Igyphw7CL%2FzKtnhrFOcq3AMF4%2FQTWrh1h9o35%2BELCdttN9mn%2FQoJEA0%2BMdVXdlCABYBld8ufkLJC3IaVnBu6rwLzON3cKXMkfBV2B4NqmYzABpO3dCIVMnUPnkvlnj2GWxgX92mKbRcn%2FkfiD%2FsVI0JlUG%2Bqj%2BVQAt0i7jPxyaQUy481Nc8%2Bw1xde%2FkbaxbX7axshamq7w5vpOq6hpVX4m302mrLqZXkxYGmDJrcG6dSxLuucn5f1G1wJrGF%2Fk44etPkbiDC97N1vG6ocTLwl3Cgnp6st2Bj5Rxgtzp53lAIZmbr5ZFxhmlGEzwTpO8yQ4wkFj25K4HpZJUVDFhLtQgOCrk8XwK1S67fTJ%2Fxb%2F0dq22Bko8bIv40DI6XWAwAI8JmekCOaprgdFiA9UVfh20Ki3KuCS8nflqHms0iZN3bz7Ha%2BFnFaF1UZQAluRR7SoF9xJtx6EL0SA61ubBL9uRkTZI%2B%2BXvKsTh8pJEVMOKn7jGyaELM2TMJ93Jd5Hu%2FH44%2B89vuyT%2FZ1WmpgymobfaABseGUL4z%2B9O8J55E5YKtwN5iBzHEjrqIQ85YKRCwmu6c96h6MPvhSjMNL7kByULbI3UkjlAGxi2XSfqqqlnpk63xXulywhQHHf6VAkHuCn6VAZEvlBeH6FvofzCplcPJBjqkAfq%2F%2Fb1i2%2FpKj8E4Gpu9gCHygsqaR3OIrYbfMt8jvJoqtofnjWIcamq6Vc5omL7YtADd%2BjqAozmI55lodeADcP9ExI%2FE6z5lQugDhczFK0LiEiILCx0DwNyvJpGOX3TDTd5znTdxpr7B5Be5nH2q77U7TZPFjdAX3HqoRyQgivGsjTwc1W%2FVJgbmnWiYYNj7aT3hF%2F%2FT9ZODje4QMW9a%2F5sm4ITm&X-Amz-Signature=7114cae8b338a8e9448e3f2c266efbccd4cbda18030691828841cdaf9dc6c9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

