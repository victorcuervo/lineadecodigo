---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUZFRDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEuAfr7bLQ%2BX4sUZcPsBbidkuf%2F2Fbf3MjM%2F6QeNEljAiEA%2Fpvfo2vnpN7heKysoc1tUOei%2F50zIs4EEnn7XBzbrj4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Iob3fpVxH8g8RNSrcA651fDqeWrpEIWLqbuqYJrlSuYh4hCLV0GJi%2FpORshnnl1HqfwvEiVYPY421%2FWg6qEcZVrzc0QwqJ%2FDZak2wyX0TXdR0hLOa75BCFgkguYbqyh7jyoT7coHSukJ1psT56%2FMgRgN9sbpo%2FN7UzuZm5qBl4tovCmf%2F%2FJCks%2FIk4tuurhVWBg%2FDNY6aAG%2Fw%2FIzX7z7l0kyW191yTYiOCOPAgJFOxf4L9hBThF5bj7SqVM8vmMeqyWVxhz%2BzEsj625ujLxr%2BBZ19Np3ifVLStL7CDndIuhpEDM0cBq67a2E59CxwW3LQyrVS9frBDV955zbJJtyGqTHzis1NWz8Yh%2Fyq%2FA%2Bu3coQok1TKrUW9loFjdaZ8H5d7FK8VE3ly6WjsyAiJn8HOlZEONdqyochPRxAgF6hStRfkFciJPVJ1idP85IrHEUO4D4uYLlxxrpPu305jK0IS4mMHMpHdF0Ho09LJRu6fgkDj8xwRvrn%2B2l7BNvGniEuTihLBwK%2B6D27eVzapFdgce4cvP531Lyg5%2F9dOZORzCIdU9eGBt2ct5z5WfMrIllSH4NHtblUhyzQ%2BkjwBcGiE3rc86mg%2Bmd0etFoPianiibrKeyKRwTlBcOs8twoNOn0b73YBCG4LJonMKyg1MkGOqUBJ7VGWtwQRMnPsvscmISZDgS8O1hyrYd26HRHGRR7mqrymr3bwMIerrsZzvzgQEckNbIKx4teD2LN4Z6TmCNDzX49MLoV1p%2BloXOJCDj5HVHMIos546d%2FC3VR9O5X81Q3dSPZL%2FGH8%2BpRpSr3ejCcaFyYFcr1lygxEv5YXwXbYDQcEDhrT%2FU4AAxaIhb8lQMJv1dZ60F%2Ff1WdYml65tc4HMx03mnf&X-Amz-Signature=18ea7c89ee685ae23f3566b2c596a9ec0b8c11c8be745eacdb51dbb30307e39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUZFRDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEuAfr7bLQ%2BX4sUZcPsBbidkuf%2F2Fbf3MjM%2F6QeNEljAiEA%2Fpvfo2vnpN7heKysoc1tUOei%2F50zIs4EEnn7XBzbrj4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7Iob3fpVxH8g8RNSrcA651fDqeWrpEIWLqbuqYJrlSuYh4hCLV0GJi%2FpORshnnl1HqfwvEiVYPY421%2FWg6qEcZVrzc0QwqJ%2FDZak2wyX0TXdR0hLOa75BCFgkguYbqyh7jyoT7coHSukJ1psT56%2FMgRgN9sbpo%2FN7UzuZm5qBl4tovCmf%2F%2FJCks%2FIk4tuurhVWBg%2FDNY6aAG%2Fw%2FIzX7z7l0kyW191yTYiOCOPAgJFOxf4L9hBThF5bj7SqVM8vmMeqyWVxhz%2BzEsj625ujLxr%2BBZ19Np3ifVLStL7CDndIuhpEDM0cBq67a2E59CxwW3LQyrVS9frBDV955zbJJtyGqTHzis1NWz8Yh%2Fyq%2FA%2Bu3coQok1TKrUW9loFjdaZ8H5d7FK8VE3ly6WjsyAiJn8HOlZEONdqyochPRxAgF6hStRfkFciJPVJ1idP85IrHEUO4D4uYLlxxrpPu305jK0IS4mMHMpHdF0Ho09LJRu6fgkDj8xwRvrn%2B2l7BNvGniEuTihLBwK%2B6D27eVzapFdgce4cvP531Lyg5%2F9dOZORzCIdU9eGBt2ct5z5WfMrIllSH4NHtblUhyzQ%2BkjwBcGiE3rc86mg%2Bmd0etFoPianiibrKeyKRwTlBcOs8twoNOn0b73YBCG4LJonMKyg1MkGOqUBJ7VGWtwQRMnPsvscmISZDgS8O1hyrYd26HRHGRR7mqrymr3bwMIerrsZzvzgQEckNbIKx4teD2LN4Z6TmCNDzX49MLoV1p%2BloXOJCDj5HVHMIos546d%2FC3VR9O5X81Q3dSPZL%2FGH8%2BpRpSr3ejCcaFyYFcr1lygxEv5YXwXbYDQcEDhrT%2FU4AAxaIhb8lQMJv1dZ60F%2Ff1WdYml65tc4HMx03mnf&X-Amz-Signature=dc21676e22cbe895f5a0681119d062701027877eefd6364fbe410ecad016f928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

