---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO54CHUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb9pwgkKPUQvkykEDdJzL5R%2FOm%2FH1GkAsyJvVPpgWmHgIgWbuDIn98812tDGpCrPpk7WYZZixNsxOuH2X47E5oRrgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJWNx6%2Bd3O2IgHe3WircAziY0lksu%2BhVdC2Vb%2Fx5PW%2BS5bqSEd6AGbXCsZ6q4kbyXhhqob%2BfZOiXz1uc1MHN1X6k5Z3QE8Q3ZeRgzZOl8mY1mqL8%2B3GlybO455dlOgeq8EkZqEMQfOWYFvwEAry8rJ6kJuzPvyxzO6SDt2YyEJ7wN0KPsPITsZbPvx5yvD4IL2eAYV6etiyQu9qu3Tc9JiqdHJT0%2FEyC%2BmGeJWPsbxVp4NkdOzwrkdr4D88r9n%2Fgv90JgVDfyMdbRekSNpdiDnOjjxClSIIqvNsjEZvHAbpDdXNDrY0%2F5jsBDyJ%2BHTVx78Pv40VAKTEiYQi9Bf%2BhlWxQ%2FNHR0nje910gnVX5yCuCALIGMwKOIxPXCnBnAwnEhRZqqSYOP%2Fr2h%2FpEDHjcsnSqMO8RgzLJVZBZb3R1ELpi3SkFzTrn54XZJJeK7QzcmYCvFG2OkY%2BSq%2BQeUuKMqdF9f3F4FvPFjg2stS3dJmwf57%2BiWAH3wv1YJciEBm3OYTuxjMANk21HQnmgpRXZQJ0lzoJUSKQ%2BgrVkSu4mHXAq8M4ckB25L3Ey0AgF7ZUAquhPyTdyIOtvaRrQw3uYOvqBi%2FhR4V71vb2teLBBgW99F3MwbwlnxYgE1j6nM8di5M1dJA4a4LQ%2FGqRPMOarxckGOqUBY%2FVkl50uHrSw3qW98IAYNy2wfh%2BqW%2FCdpn%2Bzc5GNBNsMImBmPPBCXgmobx%2BYNU7VQp9nKLU2rj0gb4KzK35uGT0mkyIqiA0rNldUwF%2F%2BJASDFSKSxcGdu0vqY0ujm6eXxrHkI%2FSE1VagiVx834LzW%2Fd%2BHbRz87mS89tWwN%2BqQ8IMZ4fvDBWG1G26N1Ik1wpqdhCcaXQI6naopE4%2Bv8uJM60uS1PV&X-Amz-Signature=eb8d9a09737d35d4897e9d8d391655b00fc4545da468ebb0e2556440b2e1194f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO54CHUT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb9pwgkKPUQvkykEDdJzL5R%2FOm%2FH1GkAsyJvVPpgWmHgIgWbuDIn98812tDGpCrPpk7WYZZixNsxOuH2X47E5oRrgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJWNx6%2Bd3O2IgHe3WircAziY0lksu%2BhVdC2Vb%2Fx5PW%2BS5bqSEd6AGbXCsZ6q4kbyXhhqob%2BfZOiXz1uc1MHN1X6k5Z3QE8Q3ZeRgzZOl8mY1mqL8%2B3GlybO455dlOgeq8EkZqEMQfOWYFvwEAry8rJ6kJuzPvyxzO6SDt2YyEJ7wN0KPsPITsZbPvx5yvD4IL2eAYV6etiyQu9qu3Tc9JiqdHJT0%2FEyC%2BmGeJWPsbxVp4NkdOzwrkdr4D88r9n%2Fgv90JgVDfyMdbRekSNpdiDnOjjxClSIIqvNsjEZvHAbpDdXNDrY0%2F5jsBDyJ%2BHTVx78Pv40VAKTEiYQi9Bf%2BhlWxQ%2FNHR0nje910gnVX5yCuCALIGMwKOIxPXCnBnAwnEhRZqqSYOP%2Fr2h%2FpEDHjcsnSqMO8RgzLJVZBZb3R1ELpi3SkFzTrn54XZJJeK7QzcmYCvFG2OkY%2BSq%2BQeUuKMqdF9f3F4FvPFjg2stS3dJmwf57%2BiWAH3wv1YJciEBm3OYTuxjMANk21HQnmgpRXZQJ0lzoJUSKQ%2BgrVkSu4mHXAq8M4ckB25L3Ey0AgF7ZUAquhPyTdyIOtvaRrQw3uYOvqBi%2FhR4V71vb2teLBBgW99F3MwbwlnxYgE1j6nM8di5M1dJA4a4LQ%2FGqRPMOarxckGOqUBY%2FVkl50uHrSw3qW98IAYNy2wfh%2BqW%2FCdpn%2Bzc5GNBNsMImBmPPBCXgmobx%2BYNU7VQp9nKLU2rj0gb4KzK35uGT0mkyIqiA0rNldUwF%2F%2BJASDFSKSxcGdu0vqY0ujm6eXxrHkI%2FSE1VagiVx834LzW%2Fd%2BHbRz87mS89tWwN%2BqQ8IMZ4fvDBWG1G26N1Ik1wpqdhCcaXQI6naopE4%2Bv8uJM60uS1PV&X-Amz-Signature=ddddeceaef3b629dbd4a20cfb65de8c2210872b55bdb3de8e5fa64ae1710763d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

