---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUNVEEZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrpa3suJdBo68NpbRPop4KTp%2FIjy30YqOmL2ApK6YXWgIhAMT7l%2FMJefa8FTFDei2egtYhkPAMMIJn9PTVHXfYKUiDKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn4UBvnurRKKfwStgq3ANy88E4Kmur4bv7CMQRzSGFH7LNu5lg9IYMVQeWm5e%2Fh1lKbZ4bgaYzT8JfJ%2FhU%2FlnfL2eMJ8JRmPgXJmTkg8GZc0HNzbBJ%2BL3xPj9VTExYWXZyq47EcbnzMOmvM7k%2FjJOdNUlG7zD95bb5FKeexPb6zec3ntiYrI483I5nljCsmELvlUysdTavYI1l0YQhoypZGD5flkt7aRMpFQ9Z63XTOr4pO5ypMm2cMMfRRoTcArBabtGoP13G4EIYR%2BPNqrWAeu%2FtZLLYz%2BeI6L3MbXNtgM8oCMwwRPSdDxoFi%2F7LMmlJi6WlUY6WQB1m6NS6xuFkjI0gux7gl17brgTArTeTXOHuiQwNX7C1VsOZSKW%2Bsp2mRFK3vK8aUS4aGu5SPy3BZwVxl6qENM620EQflt7YYma1%2Bs9t7eY5KCCUtMRmAdwtgkzXQ9kZ%2F9PF39K9%2FT5kHAGsPFmClRIOt6uBnRNL%2BhIq%2Fo0oy1mVuk3tnNMbwlwm%2BZ62wKT0ToCUXoSJKGPqp9L%2BIrzSKw9%2BFQz5ixYmFUU4YMSMrHBfSLsVIZUQBnSV1UPvyfsGOPlCYMvipLLy2vCdZjyr%2Buw3%2F4837zoNxYuOWH3yQ32ECdw57jDOqnpPI33r0T8fhAHgmzCnqNfJBjqkAZJqdRmXBTeapgmFLEhgYGsz5CcMFGeK0GrWPRFaljOPjIMHWSUnq%2FEZCp0WXOsJQvbD28c7CCjexVoV8NSPWTxuZ%2FKDgpfDOgQiHN0XlCLZFdU5TnR%2BFjEge3HbHqiM%2Fd3n7vYwfygeNAX3s0LGFm5gCPXgOnhM%2BbJUm9J8v6rrjoUwdewxsT9SsiCmGaAi%2FMqW3D6CHlOknNVm60k3ELS8WKaa&X-Amz-Signature=4a8d9bffef4db9756c9148cae2a64c84aca0bfa7202e3fcd3e4be30d23cff01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUNVEEZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrpa3suJdBo68NpbRPop4KTp%2FIjy30YqOmL2ApK6YXWgIhAMT7l%2FMJefa8FTFDei2egtYhkPAMMIJn9PTVHXfYKUiDKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn4UBvnurRKKfwStgq3ANy88E4Kmur4bv7CMQRzSGFH7LNu5lg9IYMVQeWm5e%2Fh1lKbZ4bgaYzT8JfJ%2FhU%2FlnfL2eMJ8JRmPgXJmTkg8GZc0HNzbBJ%2BL3xPj9VTExYWXZyq47EcbnzMOmvM7k%2FjJOdNUlG7zD95bb5FKeexPb6zec3ntiYrI483I5nljCsmELvlUysdTavYI1l0YQhoypZGD5flkt7aRMpFQ9Z63XTOr4pO5ypMm2cMMfRRoTcArBabtGoP13G4EIYR%2BPNqrWAeu%2FtZLLYz%2BeI6L3MbXNtgM8oCMwwRPSdDxoFi%2F7LMmlJi6WlUY6WQB1m6NS6xuFkjI0gux7gl17brgTArTeTXOHuiQwNX7C1VsOZSKW%2Bsp2mRFK3vK8aUS4aGu5SPy3BZwVxl6qENM620EQflt7YYma1%2Bs9t7eY5KCCUtMRmAdwtgkzXQ9kZ%2F9PF39K9%2FT5kHAGsPFmClRIOt6uBnRNL%2BhIq%2Fo0oy1mVuk3tnNMbwlwm%2BZ62wKT0ToCUXoSJKGPqp9L%2BIrzSKw9%2BFQz5ixYmFUU4YMSMrHBfSLsVIZUQBnSV1UPvyfsGOPlCYMvipLLy2vCdZjyr%2Buw3%2F4837zoNxYuOWH3yQ32ECdw57jDOqnpPI33r0T8fhAHgmzCnqNfJBjqkAZJqdRmXBTeapgmFLEhgYGsz5CcMFGeK0GrWPRFaljOPjIMHWSUnq%2FEZCp0WXOsJQvbD28c7CCjexVoV8NSPWTxuZ%2FKDgpfDOgQiHN0XlCLZFdU5TnR%2BFjEge3HbHqiM%2Fd3n7vYwfygeNAX3s0LGFm5gCPXgOnhM%2BbJUm9J8v6rrjoUwdewxsT9SsiCmGaAi%2FMqW3D6CHlOknNVm60k3ELS8WKaa&X-Amz-Signature=d2e58e012609d2939d6bb93d31752401f8a467717aedabfb105db54cf409f58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

