---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPD7AA7T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHZecj2cz35cIBkRtQ6MUVAXt4avnwSZwq34R5ODYnUCAiEA%2FudQqYt3J8LQcfpdkv9ZodxP3vcnspgf%2Fuk9dwMIKbcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO4qp6%2Bsp9cW2Pw6hSrcAxBD%2Bp%2BdiHeWd862lDYSvGB247morsqGwTmm5rGVytFDGNcoIeq00Mbo2S6R8fzqzkVGTI1HOABxVrid%2FFChXiK6QaDdUq3maryktrpHNORtYUDI2fkWtPNK0LBazsaxwlfB901cxd4meuNTZ5hV0MP%2B2WHbfjuq3P7z0Ye%2FnrOJfNiBEEFRePugDDxlzibwmIKm179TawNutVZuX8hXL1yntoZHX40m2nw4l4NZmC9Z3asL1k%2FVvq3TsO9%2FrMMFFI1aas81d3LXBDo3MIV4ryz7%2FevaxAhfAIaKx8JBU3kkbick4Z%2FNc3ejw6a%2BZX1PQT1l2fVtM4WgbZkeszaRxUmGkkMhhnS6DqDKT2rsfomUlKpj2tNddlwm9MObcCpGhOH%2FIu%2FuFzYPSQFDFA4GsUnKrkKRbe5fJnAkntw91C0XaqjKAQCRQwiwPY41o54M5iYscn7K5Ev0Jhi%2FE5bRFLjukjS%2BxY29BL2ulT7YSUuuSCBXAkKU0IEfgXEa8mM92QhXXlFDCiVw%2Bg%2FmMMCFl1nHOgrTSM98VAO%2FRZfHFM5od%2BFvr1tVyROKac3MdViuUX23jifLMzkLR2MTLEVfkw%2BdqDEfmb1NDJ8zmdIo1T4K6GrYeozFfTsVUEIFMOOUw8kGOqUBf0CmymVTYo7HGZyg9tX%2FewruAT9lDQCMi7IjCQPC%2FbRMHl7fLgKuZm7eF18lHik0dgpVsXWT%2Fc8vhYQO1HGS9vtfQ47Fj41lWG1h8iDnT2axqeLzSDNWIH98SXHfCuZNHtalNwa2%2FSi9vNfUM5%2FqvMH5wx9kMFvfXGh%2BZtDyKUDJiKA4dxImg77RViyr02i9e7GVPlchaI3S1HKEiNkkHJ71bECe&X-Amz-Signature=4d277eddb1033874e640b8cd13423d74f8fc5fe1164827311f5d24780aa816b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPD7AA7T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHZecj2cz35cIBkRtQ6MUVAXt4avnwSZwq34R5ODYnUCAiEA%2FudQqYt3J8LQcfpdkv9ZodxP3vcnspgf%2Fuk9dwMIKbcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDO4qp6%2Bsp9cW2Pw6hSrcAxBD%2Bp%2BdiHeWd862lDYSvGB247morsqGwTmm5rGVytFDGNcoIeq00Mbo2S6R8fzqzkVGTI1HOABxVrid%2FFChXiK6QaDdUq3maryktrpHNORtYUDI2fkWtPNK0LBazsaxwlfB901cxd4meuNTZ5hV0MP%2B2WHbfjuq3P7z0Ye%2FnrOJfNiBEEFRePugDDxlzibwmIKm179TawNutVZuX8hXL1yntoZHX40m2nw4l4NZmC9Z3asL1k%2FVvq3TsO9%2FrMMFFI1aas81d3LXBDo3MIV4ryz7%2FevaxAhfAIaKx8JBU3kkbick4Z%2FNc3ejw6a%2BZX1PQT1l2fVtM4WgbZkeszaRxUmGkkMhhnS6DqDKT2rsfomUlKpj2tNddlwm9MObcCpGhOH%2FIu%2FuFzYPSQFDFA4GsUnKrkKRbe5fJnAkntw91C0XaqjKAQCRQwiwPY41o54M5iYscn7K5Ev0Jhi%2FE5bRFLjukjS%2BxY29BL2ulT7YSUuuSCBXAkKU0IEfgXEa8mM92QhXXlFDCiVw%2Bg%2FmMMCFl1nHOgrTSM98VAO%2FRZfHFM5od%2BFvr1tVyROKac3MdViuUX23jifLMzkLR2MTLEVfkw%2BdqDEfmb1NDJ8zmdIo1T4K6GrYeozFfTsVUEIFMOOUw8kGOqUBf0CmymVTYo7HGZyg9tX%2FewruAT9lDQCMi7IjCQPC%2FbRMHl7fLgKuZm7eF18lHik0dgpVsXWT%2Fc8vhYQO1HGS9vtfQ47Fj41lWG1h8iDnT2axqeLzSDNWIH98SXHfCuZNHtalNwa2%2FSi9vNfUM5%2FqvMH5wx9kMFvfXGh%2BZtDyKUDJiKA4dxImg77RViyr02i9e7GVPlchaI3S1HKEiNkkHJ71bECe&X-Amz-Signature=b73edddbfbc9584a716479b271daf5d8d1e5980c984b4b3439581a218ce0ee91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

