---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W466QJGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjjIKjGXCZPiK2jhPi77HfGH8DIAcaG1KWU5p9tBu1NAiEAuv6RFgvL8AAFIzYGEusVbIcSiLcBF4LtEzgJMxAZCX4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB%2Fw7h4ameOMgRwKyrcA4VkQjRqh8gyombtmOJIH8CrEDWSCFaN7C10A%2BW5wyG%2FFZ9K%2BIEH12ucMDmLc4VHrnloSKGPp%2Br%2FzjpuezHsAFXrU4PrwvuL%2FTKPDSHzMKsyhAnpS4gKUDfuUy9uoucA29CjJ03YId%2Bs0N2sYy8DImTmPbrOH7MWSp9igi0emD1l%2BGKufhQdNThPcNAIT3h7PhJMamCHR0fDZARwSxvOcDphNbqmba0BOqhSMcWOnFG%2FYAzP4fmleKD7i25L7pq5tMCPVuDCC575awM5gw1BTtIQaVl%2BQBc1P1Q57YYXlvPgjKZS09F7ENmcbx6iMQKUyQEG6WA%2Bv05uupvUhUdTRDi7jrx36cESLeF8AlzLZJtBqEMueGWieV1tlp9w3OT%2F0zmPa848hzPAougyciar4MAre6ibqZ%2ByDaF9PVEgx5l1rAVlC3dlPFJXxpHIBy8kDA5JkFq5QudI5wlQfIMOK5EPxVKYGy%2B6h19KSjucJquZ8XiDVIQhH3EZ9b6vwyj08Y9M6xvgCeyuRTNcnt19tvdIAUTOZ4Egiq2QBOidgy5I2lO5mn96O5zGdc%2BmKgzisu%2BiWJiEy8RbJDXizzJGMx%2FNJyhCmzKS5fJhhFchMTXv51x82d2wMXqivvk3MKmU2ckGOqUBx1Y8i6csfR%2BIak4ZsEMEIBAUsXrMvklbL0iae28%2FHCPImSJVlIm0VZleP3D0w3y3V2g3ExruRzwzeIhsHwYH3Cbi93Jyzbs1B4yghSvTAckMx4B2aB3kxH2CPo1lo9upSSma%2Bd0KJ2%2F8ryZOHsBpvN5G8atNyPeJUAGFIJ7CUuvMB4EhHzecRMwCzHNgy38ifT%2ByPA6V%2Ft3PtDwmyFURv0fRJLjQ&X-Amz-Signature=bcd337a4861f3e9c535c129ee7b4fe8433172d17389b6d573970cbdb2cc154f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W466QJGD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjjIKjGXCZPiK2jhPi77HfGH8DIAcaG1KWU5p9tBu1NAiEAuv6RFgvL8AAFIzYGEusVbIcSiLcBF4LtEzgJMxAZCX4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB%2Fw7h4ameOMgRwKyrcA4VkQjRqh8gyombtmOJIH8CrEDWSCFaN7C10A%2BW5wyG%2FFZ9K%2BIEH12ucMDmLc4VHrnloSKGPp%2Br%2FzjpuezHsAFXrU4PrwvuL%2FTKPDSHzMKsyhAnpS4gKUDfuUy9uoucA29CjJ03YId%2Bs0N2sYy8DImTmPbrOH7MWSp9igi0emD1l%2BGKufhQdNThPcNAIT3h7PhJMamCHR0fDZARwSxvOcDphNbqmba0BOqhSMcWOnFG%2FYAzP4fmleKD7i25L7pq5tMCPVuDCC575awM5gw1BTtIQaVl%2BQBc1P1Q57YYXlvPgjKZS09F7ENmcbx6iMQKUyQEG6WA%2Bv05uupvUhUdTRDi7jrx36cESLeF8AlzLZJtBqEMueGWieV1tlp9w3OT%2F0zmPa848hzPAougyciar4MAre6ibqZ%2ByDaF9PVEgx5l1rAVlC3dlPFJXxpHIBy8kDA5JkFq5QudI5wlQfIMOK5EPxVKYGy%2B6h19KSjucJquZ8XiDVIQhH3EZ9b6vwyj08Y9M6xvgCeyuRTNcnt19tvdIAUTOZ4Egiq2QBOidgy5I2lO5mn96O5zGdc%2BmKgzisu%2BiWJiEy8RbJDXizzJGMx%2FNJyhCmzKS5fJhhFchMTXv51x82d2wMXqivvk3MKmU2ckGOqUBx1Y8i6csfR%2BIak4ZsEMEIBAUsXrMvklbL0iae28%2FHCPImSJVlIm0VZleP3D0w3y3V2g3ExruRzwzeIhsHwYH3Cbi93Jyzbs1B4yghSvTAckMx4B2aB3kxH2CPo1lo9upSSma%2Bd0KJ2%2F8ryZOHsBpvN5G8atNyPeJUAGFIJ7CUuvMB4EhHzecRMwCzHNgy38ifT%2ByPA6V%2Ft3PtDwmyFURv0fRJLjQ&X-Amz-Signature=94fc6ad76051eecfd900d2b6520a861509eac0e5ee97361fc709c0a3200c5874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

