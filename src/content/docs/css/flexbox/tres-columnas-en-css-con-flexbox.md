---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5MBTAP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzaQgwSO7tq0R1Q1LvmYpAwjBT02csrK8aq4AKBOmh6wIgMHc32u8LNqC11U60fnBGPh1wlHPVUfI31bkmcFE8wdEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7QoUoCIXCuqwNAASrcA3Lsg6i6VlyEcnG5%2BOGWsBDqseztXwbfyR38KQCcFRVqhS0JehJB%2FmiIwHDSuIamSh7YVinrgDk6u%2FPmwIOu4USE2QWM7M%2BUscCeOIyI9YVd9JC9%2FlE32Vi6PVJjxzjrv11ews6UnmBNXHljfiSnaSLHTSm6kNyYx%2BptjzjdKGaunme5B8aU7lWc43344S88dhazi5uueTr%2BMO2YV2YpbjvWh%2F8YrAFOGWdnk9nd3%2BKHv3eVGiKcsGQWWXuqsBzPLThLdgYtBYRLFFQIwoIieHKbDf4Qavjy8SaBuP6ZHvMfsTQuYhJyamA%2FLJLCD8zXkv4Qohpecx3Ks4tGZ8jjQDsuic1sPkGRNWFO%2F1jo6CcXZpse9ojehaql0nRued6WFVdU4%2Be4t3c99eWPfoOo%2FOLrHbUBI2hnotxiV5FC6G37jZL4nUOgCxBfGkpOQfsxFzgNpVq7EXe7zSu3ltR1m8%2F0mN3luNcXQ8tItVyQEI9mi3QrsCmNAvYckaUnd3LIpDL3i0RC28Ai0i%2BuGx1BtZ0ipH3GicmG42A45DOkVYJ6jq4YnogxmPr6nK84PLwdLbZU9JFhlWhgT%2F%2BxrunbgScK7h6U%2FZbdvgD0B%2B8MYaC92MGZWhHbFGspRbWJMLih2MkGOqUBO%2Fdb8AaQjI2jF3z7VOkrs%2BWL8gPDIRfj0ofqyWAAU58OnjNOUYJvx2dyGNQdF9%2BF5I4j1ttu4fxYv1UXwBfL7Ww8av0SA86gnMoPIV8NZ4Yn1aRUu1wwMAgMZod332AN%2FqeTBAzfz%2F0dEj5IsTL22ipovgiHZZCguz5Ibc4955DoDW1%2BvorUk9fqzDq1VdoINWCI3An6z00SCFW5BKwR01UJjLdh&X-Amz-Signature=5d16012d8c27ce381e2e18bbd144dbc92507a9576e2d4417cb005cba4e1d91b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5MBTAP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzaQgwSO7tq0R1Q1LvmYpAwjBT02csrK8aq4AKBOmh6wIgMHc32u8LNqC11U60fnBGPh1wlHPVUfI31bkmcFE8wdEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7QoUoCIXCuqwNAASrcA3Lsg6i6VlyEcnG5%2BOGWsBDqseztXwbfyR38KQCcFRVqhS0JehJB%2FmiIwHDSuIamSh7YVinrgDk6u%2FPmwIOu4USE2QWM7M%2BUscCeOIyI9YVd9JC9%2FlE32Vi6PVJjxzjrv11ews6UnmBNXHljfiSnaSLHTSm6kNyYx%2BptjzjdKGaunme5B8aU7lWc43344S88dhazi5uueTr%2BMO2YV2YpbjvWh%2F8YrAFOGWdnk9nd3%2BKHv3eVGiKcsGQWWXuqsBzPLThLdgYtBYRLFFQIwoIieHKbDf4Qavjy8SaBuP6ZHvMfsTQuYhJyamA%2FLJLCD8zXkv4Qohpecx3Ks4tGZ8jjQDsuic1sPkGRNWFO%2F1jo6CcXZpse9ojehaql0nRued6WFVdU4%2Be4t3c99eWPfoOo%2FOLrHbUBI2hnotxiV5FC6G37jZL4nUOgCxBfGkpOQfsxFzgNpVq7EXe7zSu3ltR1m8%2F0mN3luNcXQ8tItVyQEI9mi3QrsCmNAvYckaUnd3LIpDL3i0RC28Ai0i%2BuGx1BtZ0ipH3GicmG42A45DOkVYJ6jq4YnogxmPr6nK84PLwdLbZU9JFhlWhgT%2F%2BxrunbgScK7h6U%2FZbdvgD0B%2B8MYaC92MGZWhHbFGspRbWJMLih2MkGOqUBO%2Fdb8AaQjI2jF3z7VOkrs%2BWL8gPDIRfj0ofqyWAAU58OnjNOUYJvx2dyGNQdF9%2BF5I4j1ttu4fxYv1UXwBfL7Ww8av0SA86gnMoPIV8NZ4Yn1aRUu1wwMAgMZod332AN%2FqeTBAzfz%2F0dEj5IsTL22ipovgiHZZCguz5Ibc4955DoDW1%2BvorUk9fqzDq1VdoINWCI3An6z00SCFW5BKwR01UJjLdh&X-Amz-Signature=143fa919575fd866d1c51ba6472e86c2338369662c3a1ebf26201166a1010531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

