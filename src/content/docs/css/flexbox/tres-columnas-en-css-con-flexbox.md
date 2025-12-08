---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGVZC3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl1yoJYFOlATjNh4P%2FMSTQyqjdDCMd2ffNUupWgoBLEAiEAw4i0PrtlEw44i%2FZqE3In0wKJQsAAcyPzd3OcHbzvDs4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOefu298KLpsWA26RyrcA%2FkPiZ47yAHr0qERZRpKgSMNrN8uJQd%2BE%2BJZYxL3urYuZvfZSzBfu8Zq1o1bzKUKDFZNfGhe04F9o5tcxtw%2BJWhhg%2BeyZv%2BcRgN2ZEs4ICKy0HGX%2B3Bmc5b8PBzGH%2B%2BXIub%2BEUCfBCz1dI%2Fj%2BGgEWuZXatQQp2g%2BqUHHnorimYqq%2BsQHcG8LKxgNx6ssaxkeScNI1HaIZj9U47Qiqhu7BCfRsIlCGpcGwPDnCArMV4QrSHcStY2STBJPqXhZJFNSCpO7JwLjXBSJNM%2BjFlTAIeWzkJWVuQksBcH4WUYC92%2FUfBFa2wBBjKULQ%2BEmyxzAuKuwgTo7jaEjnkpgjCcEaKMdc96ycOja6xnz96iYnxbpQVFttr407VV2unPf79UFCaw%2BXLTIttMKai%2BAoib%2F7Y8eJFRJ1LY5jl1%2B1VLoiIIqtLifvhYjmU4uzG1XRTpx4xXCTA0fxOluROryNAp2bFKUzwWq7eHA3n3zHLjUB%2FJz3VWOCgwHixoEUGLwT%2FgzcAVsmBmyTbJ%2BFuOq60J3JCNkO2A74i9KwzyIw81HJM7Dzj5EI6z1K6ma9CoeBl47iDL1ssYzWqzyzCt9UgWKWQNatcwzGI7kwrsXhln1W%2FFd4T%2BJkE2Fr0ZaisThMIPt2ckGOqUBvvs8bp15RMLTwQWhfFuuWUyD4yrwKf8PFwvizmmcHtkMQbUeUX5oilKrud7D5ywBNWg3GdYpI6ORwjTwmY5wfxEM0uIRoHaEkr%2F87PuW3L3oH%2FqnHiFGTaAU%2FPSQOM3zC5LBkn4aLC3q77x2dtdbwq2ilC6XWNHqSf30ZzWMDEAkddevVBvkcnhglUNed0xMZM%2F4v0HxfEoDN2oR4AM0gYAUeTjk&X-Amz-Signature=9f558d033c6f461a5a0e863e6c6888158e655491a62a175d2569c14913933044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGVZC3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl1yoJYFOlATjNh4P%2FMSTQyqjdDCMd2ffNUupWgoBLEAiEAw4i0PrtlEw44i%2FZqE3In0wKJQsAAcyPzd3OcHbzvDs4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOefu298KLpsWA26RyrcA%2FkPiZ47yAHr0qERZRpKgSMNrN8uJQd%2BE%2BJZYxL3urYuZvfZSzBfu8Zq1o1bzKUKDFZNfGhe04F9o5tcxtw%2BJWhhg%2BeyZv%2BcRgN2ZEs4ICKy0HGX%2B3Bmc5b8PBzGH%2B%2BXIub%2BEUCfBCz1dI%2Fj%2BGgEWuZXatQQp2g%2BqUHHnorimYqq%2BsQHcG8LKxgNx6ssaxkeScNI1HaIZj9U47Qiqhu7BCfRsIlCGpcGwPDnCArMV4QrSHcStY2STBJPqXhZJFNSCpO7JwLjXBSJNM%2BjFlTAIeWzkJWVuQksBcH4WUYC92%2FUfBFa2wBBjKULQ%2BEmyxzAuKuwgTo7jaEjnkpgjCcEaKMdc96ycOja6xnz96iYnxbpQVFttr407VV2unPf79UFCaw%2BXLTIttMKai%2BAoib%2F7Y8eJFRJ1LY5jl1%2B1VLoiIIqtLifvhYjmU4uzG1XRTpx4xXCTA0fxOluROryNAp2bFKUzwWq7eHA3n3zHLjUB%2FJz3VWOCgwHixoEUGLwT%2FgzcAVsmBmyTbJ%2BFuOq60J3JCNkO2A74i9KwzyIw81HJM7Dzj5EI6z1K6ma9CoeBl47iDL1ssYzWqzyzCt9UgWKWQNatcwzGI7kwrsXhln1W%2FFd4T%2BJkE2Fr0ZaisThMIPt2ckGOqUBvvs8bp15RMLTwQWhfFuuWUyD4yrwKf8PFwvizmmcHtkMQbUeUX5oilKrud7D5ywBNWg3GdYpI6ORwjTwmY5wfxEM0uIRoHaEkr%2F87PuW3L3oH%2FqnHiFGTaAU%2FPSQOM3zC5LBkn4aLC3q77x2dtdbwq2ilC6XWNHqSf30ZzWMDEAkddevVBvkcnhglUNed0xMZM%2F4v0HxfEoDN2oR4AM0gYAUeTjk&X-Amz-Signature=306f615f23e9b0629c700b9aab247b2abd8b94a25fb918aae145d88344d92f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

