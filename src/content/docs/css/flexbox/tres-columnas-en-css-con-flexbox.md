---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRISJM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC4zHd2R3LWgKdHi0UWpC%2FxAjd%2BiRw9paHhVOINeLgPYAIhANTbDb%2Be1UrL37LW5YJngWa%2BV6200WQa%2B39NqPlStC9EKv8DCDsQABoMNjM3NDIzMTgzODA1IgxCyDMhGVEl%2FRq6wxYq3ANcnuaY7B78xGhyBX1haB1aI%2FX%2FZFYLU3zDyoOwvy35m8q7iM1whKIfvyAohAUpWCd%2Fyz5j0opC40QEcxjYsFpnfPCGDt%2BOWgg%2BcIFNY%2BILo%2F3Ekh26xdzKhnizuYD6cpb8%2BHlGCoO%2FhawXVmtYoYqPqYY%2Fi40C3G1Zr7qwppIL%2Fqr5i1djCw0x8G1LOIeqKacYIEZ42n5bMSLvbBnn7uLQSpNT7FqSK2Jo7lxtL3Pmnig8OhgmeSIBJPNxkyNF2bVwJ9YytBLDndQSYBc6tKlNBhiXjaO1JX2J23lXZxjB%2F6MIsou0kN8RN4wWsW5lKL%2BEKIAxXF09WVjlrH%2FrOgWahSIceSRPs3Grrs%2F3UVZqbo2NCcIRasyEF%2BXvTzhkQKM9YA6LAdH5VCvQHrZDiuTUAkQic3bU3bZhMtRqVdVK5VlScaPnljPwwiQflrGrgN%2FjtSaZp8cML%2FWMiiC9XSs3jTvrcvjHiwhiURvnzSnJk6GcE%2B7ngcyFqJSGKZr0w%2BTVUzo3L0pMRuNsPG8b2Y09IT2RkTj4mPIvoJkapMJJPZaYiG3Xh4MiMLMu1Gz0j25u23eVRI%2FPmv%2FyFRAAqomsZcMUm0kUGE9VecKFUOgokHk2hjzhf0Pb2nc8UDDv08PJBjqkAYAkWRO2PGyVFxczf%2FxyuhpxFFnwZthplTIHpPmeANq8jXM8Flg8KwBKBNTCFlb1gr8U7FBHodZGtD7VS%2FjIFw2%2BWE4bgZdMQjWZCiaFIQ7UDYXVi2Uivr79t81XC9iEUnmeq7uMZJAcX7qnNmTyxiIR4N3uvM9Y871Bpmw0X9eRPwnO4eX2W6beV8MstQ%2Bx3wY8oVA1AC9HlRIb87d7%2B5LrKdGP&X-Amz-Signature=b5df06f7861a2bcf4b7297797217c5696c9aca6d8a769be412234e42cc633d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDRISJM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC4zHd2R3LWgKdHi0UWpC%2FxAjd%2BiRw9paHhVOINeLgPYAIhANTbDb%2Be1UrL37LW5YJngWa%2BV6200WQa%2B39NqPlStC9EKv8DCDsQABoMNjM3NDIzMTgzODA1IgxCyDMhGVEl%2FRq6wxYq3ANcnuaY7B78xGhyBX1haB1aI%2FX%2FZFYLU3zDyoOwvy35m8q7iM1whKIfvyAohAUpWCd%2Fyz5j0opC40QEcxjYsFpnfPCGDt%2BOWgg%2BcIFNY%2BILo%2F3Ekh26xdzKhnizuYD6cpb8%2BHlGCoO%2FhawXVmtYoYqPqYY%2Fi40C3G1Zr7qwppIL%2Fqr5i1djCw0x8G1LOIeqKacYIEZ42n5bMSLvbBnn7uLQSpNT7FqSK2Jo7lxtL3Pmnig8OhgmeSIBJPNxkyNF2bVwJ9YytBLDndQSYBc6tKlNBhiXjaO1JX2J23lXZxjB%2F6MIsou0kN8RN4wWsW5lKL%2BEKIAxXF09WVjlrH%2FrOgWahSIceSRPs3Grrs%2F3UVZqbo2NCcIRasyEF%2BXvTzhkQKM9YA6LAdH5VCvQHrZDiuTUAkQic3bU3bZhMtRqVdVK5VlScaPnljPwwiQflrGrgN%2FjtSaZp8cML%2FWMiiC9XSs3jTvrcvjHiwhiURvnzSnJk6GcE%2B7ngcyFqJSGKZr0w%2BTVUzo3L0pMRuNsPG8b2Y09IT2RkTj4mPIvoJkapMJJPZaYiG3Xh4MiMLMu1Gz0j25u23eVRI%2FPmv%2FyFRAAqomsZcMUm0kUGE9VecKFUOgokHk2hjzhf0Pb2nc8UDDv08PJBjqkAYAkWRO2PGyVFxczf%2FxyuhpxFFnwZthplTIHpPmeANq8jXM8Flg8KwBKBNTCFlb1gr8U7FBHodZGtD7VS%2FjIFw2%2BWE4bgZdMQjWZCiaFIQ7UDYXVi2Uivr79t81XC9iEUnmeq7uMZJAcX7qnNmTyxiIR4N3uvM9Y871Bpmw0X9eRPwnO4eX2W6beV8MstQ%2Bx3wY8oVA1AC9HlRIb87d7%2B5LrKdGP&X-Amz-Signature=c7c81414a1a2e469b477e62249f5d5d82d19f85722656dec000a043398fd7ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

