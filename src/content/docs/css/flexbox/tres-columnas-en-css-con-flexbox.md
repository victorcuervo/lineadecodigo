---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQG2COA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIOJk2xvmcFFdg%2BX%2Fuz1zNj6bRZ9B5glUcQJOdoUuS2AiEAnBGwaXPdwpC4NxaqZrvPMHEnb4f1wUzT5CIQxXajsYcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL3o6P3G53z7oKe7yyrcA9dmfm6z5WkBOssXSMBPU70tAHxXnLvZUzesAM6D8Qrpp1rKyGNaEi%2FrGUm%2FDXU9WZwEHQGe2hv3IokNPhqXJ9Izm3UWfxngPudaoRJoWbaXjsRR41YOz8n2zJtLEtcKJAC7Fkfu%2B0lVp56Fp5sEAo0%2BD7hJmq6EO2Iww0X5sPpvW9qoBPhPqgkkub8yeULYLf0CyWgy7INeDFErtIz12Sq3rfGUurGpDkFQjQbVdiQS7b6MmKebhTQHMwquEjd4ak%2B8O49JDRK9ADojzrC2sBJ8bEzKCMERCj0%2BgXxJAqhpcbwV9v3VX1kNd6X6DRAehjbcjvaWegPBrHVfjrdeOrUpUjSOqytDUkRUJI8ZBcEeV%2F6hbpGVCQcN0Sk7M8OlgKihweXawA0ryCkeh%2BU05kYkxqSy%2FWWStF88Yud4Zt%2F4kZvEOabMLd3DS4%2ByLJCT%2B5sK8XMzPlQPx5xny%2BuOtfg7lIT%2FsrGq0rIJiaxi%2BbcHCXoKOK1Stz%2FqSBTbA%2BTPqC0u3vtUUaFo3TMurzpzWFu4cd6o%2B4MiBI6YMbxxOXubV0awfJOUkdmfiADIXLO27ZJO17jy%2FqDouqE%2Fn6qunLnEHCimvoO%2BLJmdI5uPuWMwgRbJm8fXL5%2FXHMPIMNeMyMkGOqUBFlWh4aIpK4dowgz%2BVUMqleGEho%2BBxEPj7XX3itu7NXXgc5E4HYqkAM1qW9Wv1OA3k8fP0HCyWONKEd%2FYsYnGS1s%2BCJDn5icyQraW5Ed8sUqXnI7fT5WhjpY0WE7Al153bOq1eQJHcBOWOPaNaDfVTsPd3Q5t%2B9DLtru3ZtnF1GGfcSdHOhMdsg73ryXebK%2FsdPj6VNuNhAGb1NVbkRfNWyT5o3Fv&X-Amz-Signature=7013a746151fb2dc8a9da27360e96df3ac574f1e04951115ce045e078d65292c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VQG2COA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIOJk2xvmcFFdg%2BX%2Fuz1zNj6bRZ9B5glUcQJOdoUuS2AiEAnBGwaXPdwpC4NxaqZrvPMHEnb4f1wUzT5CIQxXajsYcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL3o6P3G53z7oKe7yyrcA9dmfm6z5WkBOssXSMBPU70tAHxXnLvZUzesAM6D8Qrpp1rKyGNaEi%2FrGUm%2FDXU9WZwEHQGe2hv3IokNPhqXJ9Izm3UWfxngPudaoRJoWbaXjsRR41YOz8n2zJtLEtcKJAC7Fkfu%2B0lVp56Fp5sEAo0%2BD7hJmq6EO2Iww0X5sPpvW9qoBPhPqgkkub8yeULYLf0CyWgy7INeDFErtIz12Sq3rfGUurGpDkFQjQbVdiQS7b6MmKebhTQHMwquEjd4ak%2B8O49JDRK9ADojzrC2sBJ8bEzKCMERCj0%2BgXxJAqhpcbwV9v3VX1kNd6X6DRAehjbcjvaWegPBrHVfjrdeOrUpUjSOqytDUkRUJI8ZBcEeV%2F6hbpGVCQcN0Sk7M8OlgKihweXawA0ryCkeh%2BU05kYkxqSy%2FWWStF88Yud4Zt%2F4kZvEOabMLd3DS4%2ByLJCT%2B5sK8XMzPlQPx5xny%2BuOtfg7lIT%2FsrGq0rIJiaxi%2BbcHCXoKOK1Stz%2FqSBTbA%2BTPqC0u3vtUUaFo3TMurzpzWFu4cd6o%2B4MiBI6YMbxxOXubV0awfJOUkdmfiADIXLO27ZJO17jy%2FqDouqE%2Fn6qunLnEHCimvoO%2BLJmdI5uPuWMwgRbJm8fXL5%2FXHMPIMNeMyMkGOqUBFlWh4aIpK4dowgz%2BVUMqleGEho%2BBxEPj7XX3itu7NXXgc5E4HYqkAM1qW9Wv1OA3k8fP0HCyWONKEd%2FYsYnGS1s%2BCJDn5icyQraW5Ed8sUqXnI7fT5WhjpY0WE7Al153bOq1eQJHcBOWOPaNaDfVTsPd3Q5t%2B9DLtru3ZtnF1GGfcSdHOhMdsg73ryXebK%2FsdPj6VNuNhAGb1NVbkRfNWyT5o3Fv&X-Amz-Signature=96dc5ca23930579db44f7e40e7d7432077bae0eaa399c933df704cdb6ea8f666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

