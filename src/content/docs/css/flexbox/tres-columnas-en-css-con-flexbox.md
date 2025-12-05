---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2WNPB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7I0hUsrosaqgPJBRWzAVgm3kjktMypGLQv%2Bqwhc4TLwIgJ0lcXx4cW6bvJ9Bibc9PQXFS1my%2BkXBId4SncTQXTHUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAYrPnI1u5%2Fqy0FMsircA5%2FOKJRN80YwAUthlAzLFZm7tEG3hE%2BotJC6%2FDwrkh0d190U3DXdpO2sRDPvA%2FDFVjX5QyMA8yNFW2V0f76jR1dsaalf9ghGWcDaCdTOXcHHD7wKamiiWwAVu7PFyP5UIzEJOsPvo1N7i0m2P8vxt%2BsXW3DDIw4NiqTsEiXnVoXJUZyJ%2BJZGFaqZFvAFwQdp2vMnT7uyuvhrqSTFlK3MXQGj5gjd17J7vNOfGZRACLwgLVYYqvLBLmvMABlFPT6QGZeinPwDSnfQIajboHa%2FEScfEf4wR6a7bDs78u79Y4sKVaSaYtt3ebrESV5ToOJYAq%2B%2F9GWgClf1bfTUWl7Hw1%2Bv3AxdlJD0egMxSyg4iXHmuleJKq8C57XDBRd%2FyqGgqQ9AQHoVH46SdoENDCnvu9FrSJKmkeDWmaS9u%2B9oLBsM5ZVkZ5FKUIFtVa3SpD3NdVwNtM2op8VJJlk%2Fa1E6%2B4gUna9kLvBHDcT4wSR7pR1Pii9ttWEoqDkyoNAJkF4U93xlmw%2FOWNQA1%2B31wmhSIJgQrRpynOCUM3D2HSSWZSCtb1R4PMj5PC%2BT%2FKdHqTzjVukpzZL9cPPmwfY3UMgek2Cz5U8qEMw1vtVi4%2FobCOiWL6PLtM7DgYVk4ULJMLasyckGOqUBF59cMpr69gWeujHSuo%2Bo7911PZpoMHEGUoFwGGeMLmE14kF2eQ%2B03tg%2BRpJDL%2BnP9yPVl6h9Ye8oDX6WzBkhbK5VkNN8EQR1YQo3vatamLDA2CBn9laazCLgsX7%2BOCeo4N%2Fy5fdDUofTFBejWfgsDonbNsHueUyh%2BVTxEOfYFokrvjahaoTczO7U7pPkDA6LVx3h1%2BXXjTmDC1gE72yX2t8bnndA&X-Amz-Signature=6dd880bd050abdaeb7bddcd234feaf64d774fc5f6fa411767ffcc55892abd636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B2WNPB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7I0hUsrosaqgPJBRWzAVgm3kjktMypGLQv%2Bqwhc4TLwIgJ0lcXx4cW6bvJ9Bibc9PQXFS1my%2BkXBId4SncTQXTHUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAYrPnI1u5%2Fqy0FMsircA5%2FOKJRN80YwAUthlAzLFZm7tEG3hE%2BotJC6%2FDwrkh0d190U3DXdpO2sRDPvA%2FDFVjX5QyMA8yNFW2V0f76jR1dsaalf9ghGWcDaCdTOXcHHD7wKamiiWwAVu7PFyP5UIzEJOsPvo1N7i0m2P8vxt%2BsXW3DDIw4NiqTsEiXnVoXJUZyJ%2BJZGFaqZFvAFwQdp2vMnT7uyuvhrqSTFlK3MXQGj5gjd17J7vNOfGZRACLwgLVYYqvLBLmvMABlFPT6QGZeinPwDSnfQIajboHa%2FEScfEf4wR6a7bDs78u79Y4sKVaSaYtt3ebrESV5ToOJYAq%2B%2F9GWgClf1bfTUWl7Hw1%2Bv3AxdlJD0egMxSyg4iXHmuleJKq8C57XDBRd%2FyqGgqQ9AQHoVH46SdoENDCnvu9FrSJKmkeDWmaS9u%2B9oLBsM5ZVkZ5FKUIFtVa3SpD3NdVwNtM2op8VJJlk%2Fa1E6%2B4gUna9kLvBHDcT4wSR7pR1Pii9ttWEoqDkyoNAJkF4U93xlmw%2FOWNQA1%2B31wmhSIJgQrRpynOCUM3D2HSSWZSCtb1R4PMj5PC%2BT%2FKdHqTzjVukpzZL9cPPmwfY3UMgek2Cz5U8qEMw1vtVi4%2FobCOiWL6PLtM7DgYVk4ULJMLasyckGOqUBF59cMpr69gWeujHSuo%2Bo7911PZpoMHEGUoFwGGeMLmE14kF2eQ%2B03tg%2BRpJDL%2BnP9yPVl6h9Ye8oDX6WzBkhbK5VkNN8EQR1YQo3vatamLDA2CBn9laazCLgsX7%2BOCeo4N%2Fy5fdDUofTFBejWfgsDonbNsHueUyh%2BVTxEOfYFokrvjahaoTczO7U7pPkDA6LVx3h1%2BXXjTmDC1gE72yX2t8bnndA&X-Amz-Signature=7162c6d62891d1c90c0306b9f7d6f45f524142cc2fbe87fb87062e57a2308ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

