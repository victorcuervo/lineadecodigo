---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EV3ANN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWvw8151UrWWE60W%2BPqdszmyQ3T2sI0jCl4iX96JFU%2FwIgdLcBjW1qPkzWY486NrSq%2BQvRoQgpiCLXPcwnoaMHTW8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCTxZTDNhflQS4wByrcA8H8cpyB1I8VzAfIBdmi1qoo%2BIPJOnhs8w3EoGBYiLOUYrweunGujMTHMNz2f%2FzDu7q2Sj1SheF0kdMg1mVB6VILgkw1lzGiG7Im0DZiHaMaQSap3gLycI%2FO6JbT44GWCCuFNelcGzkcplwyMfQ7pCS11kv2PEapRSbDOF43yeMZjRU8yu3mGlzZ8mb8LqRogZtdUS6%2BCYA4vufGHIuBVKvUBxnAN0ypu6P%2FfvlkgIpKXtQC6eTD1%2Fao2pphwTgdKOfmNm2dpoOhnXF8ftpqs8nmZIbD%2BFIh28Si1wbJg7V3N5k22GHt5G3antsU%2FhXBoAw7f%2BGRzX9HWE00OihYK%2F%2ByBS1S13geyDt8HEuxN1k8soyjMBNNnkETkMt8XoWrj6sC5uTXdVgMsTTrk2vLSiPxuWyF6nD3sWfI25BaVrPVhAQgMviI4IuX95P7DcTAPF%2BFt1nUdF2ew%2BHWP0HlsTzKiQGyuHbMQWy6CkJScAWyos12E2I6gL1RyQjoezI8GRTdHO5509ghlzksMO3v2%2FSK%2F40hvpAeRtKjs17k34CQXqpjZbOyMDsF52pDzJe3am3PMiZsfc4EoIcfnCDDpde8vc2w3I5mZL%2B6Du9H%2BBmUvkC7%2BJJe33f6bn3rMP2%2F1skGOqUBu3Kw8hxmucyfSPudWyo6kbbecaOYylABdRO1sIG%2BFAxt7LfZpv8t9dEJVOHrPRHwL28at%2B9pHCVG7rGj9TEo%2F%2Bo%2FUa3bH%2B4fo8ZwK4ffEjwiyPyeQPY%2Bzwa6zM%2Bv8WJr1pTLgZp3aLT0W3mDJnt1GY73dDi00xHst2wIGGf0fokIK7vgV7WjLAG6UW2Jn9rQOEJZOCaI%2BfuNM1VxqNZuaT3B5anO&X-Amz-Signature=891aa1264e8d51b28c6dac2cff70b9289ac183a4e7ece4fedadee6a5c99f42e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EV3ANN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWvw8151UrWWE60W%2BPqdszmyQ3T2sI0jCl4iX96JFU%2FwIgdLcBjW1qPkzWY486NrSq%2BQvRoQgpiCLXPcwnoaMHTW8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCTxZTDNhflQS4wByrcA8H8cpyB1I8VzAfIBdmi1qoo%2BIPJOnhs8w3EoGBYiLOUYrweunGujMTHMNz2f%2FzDu7q2Sj1SheF0kdMg1mVB6VILgkw1lzGiG7Im0DZiHaMaQSap3gLycI%2FO6JbT44GWCCuFNelcGzkcplwyMfQ7pCS11kv2PEapRSbDOF43yeMZjRU8yu3mGlzZ8mb8LqRogZtdUS6%2BCYA4vufGHIuBVKvUBxnAN0ypu6P%2FfvlkgIpKXtQC6eTD1%2Fao2pphwTgdKOfmNm2dpoOhnXF8ftpqs8nmZIbD%2BFIh28Si1wbJg7V3N5k22GHt5G3antsU%2FhXBoAw7f%2BGRzX9HWE00OihYK%2F%2ByBS1S13geyDt8HEuxN1k8soyjMBNNnkETkMt8XoWrj6sC5uTXdVgMsTTrk2vLSiPxuWyF6nD3sWfI25BaVrPVhAQgMviI4IuX95P7DcTAPF%2BFt1nUdF2ew%2BHWP0HlsTzKiQGyuHbMQWy6CkJScAWyos12E2I6gL1RyQjoezI8GRTdHO5509ghlzksMO3v2%2FSK%2F40hvpAeRtKjs17k34CQXqpjZbOyMDsF52pDzJe3am3PMiZsfc4EoIcfnCDDpde8vc2w3I5mZL%2B6Du9H%2BBmUvkC7%2BJJe33f6bn3rMP2%2F1skGOqUBu3Kw8hxmucyfSPudWyo6kbbecaOYylABdRO1sIG%2BFAxt7LfZpv8t9dEJVOHrPRHwL28at%2B9pHCVG7rGj9TEo%2F%2Bo%2FUa3bH%2B4fo8ZwK4ffEjwiyPyeQPY%2Bzwa6zM%2Bv8WJr1pTLgZp3aLT0W3mDJnt1GY73dDi00xHst2wIGGf0fokIK7vgV7WjLAG6UW2Jn9rQOEJZOCaI%2BfuNM1VxqNZuaT3B5anO&X-Amz-Signature=2103a9a6ffedccb71dbbf42c9e3f50bcd332c689c3db75f6dd985434655a67ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

