---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSHLYR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrYsaVRF55DqLShQcVWeY4t8H5jURKd8LfVB%2BPoNKAwgIgFRroPGvVATjxEF2fGngUTmiNryjqod1J95TGIVhGGzoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDETaMRKUY9sdeN8IoyrcA%2FrOqiwH0W6nY36%2BMF5TFsGrSRTKhySojl0JnNmi4ZEVgb8fEhnqamT9ON7JNMnJfm0ZeHPXo9C7YcA%2F%2FHY7fOrBV85xm8dllqcIUcq5hHCOXrq8QThSma877%2BA3Qil%2BuGu%2FZkBxE3oGJOnqy5bdFnwvR9vCrWDw3arR%2FfpE%2B1w8g1Zon4wosL4Fod7GImd%2FMjicaCmoThx7fJQ%2FmNuWofxajf%2BfiXnjyL1GP3HWw9JcBBdzwrg2NVmxSpnRrVXP9e98BXLgXeFs6I2eGzreoSQdLD5qUCIfXVCXfy1Z0QIymy7RR1wA2Z3Js3oOnNNP1hac3pXOuC%2FwpseJtl5fYnV1IQsmmU%2BGmsDQHl5M3ZkKBesbohd3Tjx%2BdgtCK5CEMq8J7zXUX2HF%2F9fnkA%2Br7M9eWvM4OWNqoD9XvLAGEG%2FccIdEh6Yl%2FzE9eX92iAqNzgdA2YTOGL9NiB6DQAAuRshfehE7NnZJNCBn4VnWyShBeRWtNvjCTwzbGObh79gnFY23FpKBIpQDthtBafbsR1TI9k1lfNIKaizAxCcQEytZpnS3RvS5j32FJXOoK3PxhO2Ru7un0rLyB%2BSjNThpuO9yKYLo8oIUzSJIOQ9DsbWxKvqUC2v58u7%2BNP4UML%2BuwMkGOqUB8lbA2yWsWeHe9%2FfzCL%2Bo%2FHE9BvahqZji2EzAxwgJ2xHZap2WgBtq5v%2FI1vKgX%2BXKSn7f6Srj%2FGTSkiMdphx5NpWnbtiKMt0tbq7kGXMKykHQQdcq%2FuMJ4kO8gbH8V12%2BY4nj6%2BgNO5ce%2BonkEQ2CQEGYS2ANWeHEd6lRst2b7hnz4VCRRWBNIm8EEWAemXsU%2BaxpyhXQ0epEdlMLUNLT7PlHVBtA&X-Amz-Signature=cea1ec33282d46b08f43e8c4f22de84fa004f95366e62bbf478d2455d68e89e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSHLYR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrYsaVRF55DqLShQcVWeY4t8H5jURKd8LfVB%2BPoNKAwgIgFRroPGvVATjxEF2fGngUTmiNryjqod1J95TGIVhGGzoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDETaMRKUY9sdeN8IoyrcA%2FrOqiwH0W6nY36%2BMF5TFsGrSRTKhySojl0JnNmi4ZEVgb8fEhnqamT9ON7JNMnJfm0ZeHPXo9C7YcA%2F%2FHY7fOrBV85xm8dllqcIUcq5hHCOXrq8QThSma877%2BA3Qil%2BuGu%2FZkBxE3oGJOnqy5bdFnwvR9vCrWDw3arR%2FfpE%2B1w8g1Zon4wosL4Fod7GImd%2FMjicaCmoThx7fJQ%2FmNuWofxajf%2BfiXnjyL1GP3HWw9JcBBdzwrg2NVmxSpnRrVXP9e98BXLgXeFs6I2eGzreoSQdLD5qUCIfXVCXfy1Z0QIymy7RR1wA2Z3Js3oOnNNP1hac3pXOuC%2FwpseJtl5fYnV1IQsmmU%2BGmsDQHl5M3ZkKBesbohd3Tjx%2BdgtCK5CEMq8J7zXUX2HF%2F9fnkA%2Br7M9eWvM4OWNqoD9XvLAGEG%2FccIdEh6Yl%2FzE9eX92iAqNzgdA2YTOGL9NiB6DQAAuRshfehE7NnZJNCBn4VnWyShBeRWtNvjCTwzbGObh79gnFY23FpKBIpQDthtBafbsR1TI9k1lfNIKaizAxCcQEytZpnS3RvS5j32FJXOoK3PxhO2Ru7un0rLyB%2BSjNThpuO9yKYLo8oIUzSJIOQ9DsbWxKvqUC2v58u7%2BNP4UML%2BuwMkGOqUB8lbA2yWsWeHe9%2FfzCL%2Bo%2FHE9BvahqZji2EzAxwgJ2xHZap2WgBtq5v%2FI1vKgX%2BXKSn7f6Srj%2FGTSkiMdphx5NpWnbtiKMt0tbq7kGXMKykHQQdcq%2FuMJ4kO8gbH8V12%2BY4nj6%2BgNO5ce%2BonkEQ2CQEGYS2ANWeHEd6lRst2b7hnz4VCRRWBNIm8EEWAemXsU%2BaxpyhXQ0epEdlMLUNLT7PlHVBtA&X-Amz-Signature=bb2cac99c17191a291da6d70af601a81e031cb283e966230509cdcee8267cd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

