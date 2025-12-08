---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOTZS2K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpUlCVziQCj%2BtQMeqj820WIflmsIb3DD9F90CTvXSBtwIhAPmSIT1qYCSBmN5wNUcAownY0kxgv4byh6cQXtGIP%2BguKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY6sq%2BpcdVdN4effoq3ANSyQBwOPrG3en0jTpohy%2FgmDhaJXkUAuOIQ0Bx6slA6SGZd2qW8QLq5fP8uuDlHTuGaJGXmZzHlfyfVzQsU2COihzY4s5D8z7Can9JCE6v0A7o4aJa3JPSYnBYLUHO%2BH2SJ5J4sBNGSGOM%2BmgsHh%2F5kMNWMKnX7GYaH3qE7j4NpcB5KI5%2BC8BPqPHb8rNMtkWFbekly%2B%2FNVQQDFrlU%2FF97cGXazAdtzR2Dtt5NxfOE6tOyz4b76C3p55AhpH7%2Bvi4x7k4XxJqN3jDQYGoz5OvWOnbVKEMhnHetyUDFXu52QCuEd9CSRhmx0Tyv5J7r6bcqtM7%2FhP5E7ld6teEZquuwXYWeIdo%2BUFNEwW4MDuCQONghqGZdX0Ksw6sWH8NVWGZqdcZ3R0jjx6d7%2FRjPxceN2IV9eojzSySYadx1xFVDFwL2Ftb1GVdR8I7%2BhpkO1GnrOi8oIly5IWlonV1ffwEGB0tuIflivlXI2Xlbnyr5UK9i1rDdH4sc0HTPPyn9xSq2R51GWDsgw0yOCem3vzze0ZwVJPqbPO5NxyLVg8r0kDljv1JMz%2F4KAZMuhIvY8vk8FsrVdNl7FJP7gEWyNZy%2F4%2B5QeNhRVzs%2BsbEoRpWLn%2Br0PXAa5JkKAw60uzDV7dnJBjqkAfDS%2BIqi128ZMFQnx%2F7al46%2FsvmSs8kK4b2L7Ft3xFhTf%2FBwQOFR%2BIhvl2zFsVprPtZzzOTOJGILjCAlnnBSv5AAC%2BnqahuwnLhl%2FoIbnGevgZUpl7iqYHIqx2O0wOH70CNb14NRR01aXEytpxsu31RLlkirGZwzI6GwwV04or%2FbRnBrarIsaHmDjwfa0Nblo%2Fk6ct4ehHU3O%2F0K0DobZqvTzyIV&X-Amz-Signature=b868d012365428e847fbd72101765a16912d0dabb47d9bc6c6a117244b1387bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOTZS2K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpUlCVziQCj%2BtQMeqj820WIflmsIb3DD9F90CTvXSBtwIhAPmSIT1qYCSBmN5wNUcAownY0kxgv4byh6cQXtGIP%2BguKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY6sq%2BpcdVdN4effoq3ANSyQBwOPrG3en0jTpohy%2FgmDhaJXkUAuOIQ0Bx6slA6SGZd2qW8QLq5fP8uuDlHTuGaJGXmZzHlfyfVzQsU2COihzY4s5D8z7Can9JCE6v0A7o4aJa3JPSYnBYLUHO%2BH2SJ5J4sBNGSGOM%2BmgsHh%2F5kMNWMKnX7GYaH3qE7j4NpcB5KI5%2BC8BPqPHb8rNMtkWFbekly%2B%2FNVQQDFrlU%2FF97cGXazAdtzR2Dtt5NxfOE6tOyz4b76C3p55AhpH7%2Bvi4x7k4XxJqN3jDQYGoz5OvWOnbVKEMhnHetyUDFXu52QCuEd9CSRhmx0Tyv5J7r6bcqtM7%2FhP5E7ld6teEZquuwXYWeIdo%2BUFNEwW4MDuCQONghqGZdX0Ksw6sWH8NVWGZqdcZ3R0jjx6d7%2FRjPxceN2IV9eojzSySYadx1xFVDFwL2Ftb1GVdR8I7%2BhpkO1GnrOi8oIly5IWlonV1ffwEGB0tuIflivlXI2Xlbnyr5UK9i1rDdH4sc0HTPPyn9xSq2R51GWDsgw0yOCem3vzze0ZwVJPqbPO5NxyLVg8r0kDljv1JMz%2F4KAZMuhIvY8vk8FsrVdNl7FJP7gEWyNZy%2F4%2B5QeNhRVzs%2BsbEoRpWLn%2Br0PXAa5JkKAw60uzDV7dnJBjqkAfDS%2BIqi128ZMFQnx%2F7al46%2FsvmSs8kK4b2L7Ft3xFhTf%2FBwQOFR%2BIhvl2zFsVprPtZzzOTOJGILjCAlnnBSv5AAC%2BnqahuwnLhl%2FoIbnGevgZUpl7iqYHIqx2O0wOH70CNb14NRR01aXEytpxsu31RLlkirGZwzI6GwwV04or%2FbRnBrarIsaHmDjwfa0Nblo%2Fk6ct4ehHU3O%2F0K0DobZqvTzyIV&X-Amz-Signature=1bd4627a076ae17a8d59d28f17e4d0d4c053933f774737cc65ac2dcb779c1ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

