---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWIEEPJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4CQ1I5GdHcr91hBtHGk2JzsnS%2BS6eQymD7a8Vwho8sAIgBS25FZr5w0xB2A4Qduq2P5dr%2BXRhBByABgW34u9s%2BrQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFk0XU8EQ4npZXrjCrcAwH645ODv4llcSp9kMny8ShIDbGl8RRhHMJWVOOdN7q3K2M%2Fj0qBzn0wTg0mXV7KTeXCaHEDf4HVKjdxL88P1n4mmrBgtP5TS5%2BNwQaTNdK8eUmPs5RI1A5XYSBT%2BKWBuLrO7xUoD0mFmfCODnfeHsPT7Y3Mjv5L%2Bv0yfWmi%2BSp9q0f7J5cisgGoZg3PV0cqCv4%2BjudbUtNJJ0Xgk4UsxefJehd5RsGEUii103QXAcy%2B9%2BqjZ8qFVw6EdC4sqMxcWMkR22G8zwRBGWXhnFCWYSdt3OhcocyBRb0L0fdlaeOn35%2BV7lCIfbFDJSnwG93bzsJXykisEdHUiaEI0Azwvpm12n0J5TJbBroUZZvSBHP8CPPl78y7kWd%2Fv5rXg%2BSIy5tsLux%2BHV2sy9RfBcjazsYsYcOzR07iVbMYcPTpUU%2Bmm5q4uo85vTr6mrKXuQo5riGMqUhoTAShehJ%2BEEkN7sxjVvl1H67xrLFTudXeo%2FswJOLWWMx2wBc7Zu3dJUtLmbIWbVT02UVYqWjw%2B2KEjhN8Mea2NH6bUm0toKRh4Y3DTLCfwXPJ4As%2Bauzd8%2BTNGekVGTrwc%2FLgpvr4rGf0LztjOHHpt8OB2m2kQ7W0c6DxnJkseYyHHzbfBelRMLHE38kGOqUBbxJXK71ZDN5Id4mfIUvqSh6rgTtLmV1rjeBFq5NhZHjqq3CELk8kYGHqpwgqo2TCEblIw3PzdZFQb%2FiXMHHDSfRQ5fEFUgU2wfSs5RI6G41SHD3DbqrIlQhUGvu1GVWY3BklZLqOZEKVUhmy%2F9luLhcePC5tXe6jnDiYNlEymMCQW4E4lPWqGofuYtgKYibioqHqwnz9yV4154hJzN6nuA2hoXBI&X-Amz-Signature=9a649438e0a4d949f4b8aa33fcd617c9a29af53d5524c3b2e1b0f214ed4f90ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWIEEPJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4CQ1I5GdHcr91hBtHGk2JzsnS%2BS6eQymD7a8Vwho8sAIgBS25FZr5w0xB2A4Qduq2P5dr%2BXRhBByABgW34u9s%2BrQqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFk0XU8EQ4npZXrjCrcAwH645ODv4llcSp9kMny8ShIDbGl8RRhHMJWVOOdN7q3K2M%2Fj0qBzn0wTg0mXV7KTeXCaHEDf4HVKjdxL88P1n4mmrBgtP5TS5%2BNwQaTNdK8eUmPs5RI1A5XYSBT%2BKWBuLrO7xUoD0mFmfCODnfeHsPT7Y3Mjv5L%2Bv0yfWmi%2BSp9q0f7J5cisgGoZg3PV0cqCv4%2BjudbUtNJJ0Xgk4UsxefJehd5RsGEUii103QXAcy%2B9%2BqjZ8qFVw6EdC4sqMxcWMkR22G8zwRBGWXhnFCWYSdt3OhcocyBRb0L0fdlaeOn35%2BV7lCIfbFDJSnwG93bzsJXykisEdHUiaEI0Azwvpm12n0J5TJbBroUZZvSBHP8CPPl78y7kWd%2Fv5rXg%2BSIy5tsLux%2BHV2sy9RfBcjazsYsYcOzR07iVbMYcPTpUU%2Bmm5q4uo85vTr6mrKXuQo5riGMqUhoTAShehJ%2BEEkN7sxjVvl1H67xrLFTudXeo%2FswJOLWWMx2wBc7Zu3dJUtLmbIWbVT02UVYqWjw%2B2KEjhN8Mea2NH6bUm0toKRh4Y3DTLCfwXPJ4As%2Bauzd8%2BTNGekVGTrwc%2FLgpvr4rGf0LztjOHHpt8OB2m2kQ7W0c6DxnJkseYyHHzbfBelRMLHE38kGOqUBbxJXK71ZDN5Id4mfIUvqSh6rgTtLmV1rjeBFq5NhZHjqq3CELk8kYGHqpwgqo2TCEblIw3PzdZFQb%2FiXMHHDSfRQ5fEFUgU2wfSs5RI6G41SHD3DbqrIlQhUGvu1GVWY3BklZLqOZEKVUhmy%2F9luLhcePC5tXe6jnDiYNlEymMCQW4E4lPWqGofuYtgKYibioqHqwnz9yV4154hJzN6nuA2hoXBI&X-Amz-Signature=a4dc98823e67119170ef0677b9894f43cc62d836c4a55b0087942e42e8cfcab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

