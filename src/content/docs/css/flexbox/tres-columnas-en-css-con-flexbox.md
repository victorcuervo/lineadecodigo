---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMK245T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbz2JoF8BuxGz70RDsg7euC7aGAIXY1tXutTI6PPChQAiBMEksrZuGZtf7DKu13lM6oB2gZbWEA3tF7Hncuxx6rLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMg7JsGNbr8WM%2BqOmlKtwD0zND%2FhEqzHa1oPvKULbPWI0Mih%2BjWvgCGjXqG6t9wdhqPJJtvWeRo2q%2B7I47gSHwM5zaOhlR4QAGMFD3GkUlsKfxWkMMIZYVW34OJjwU3Il%2FYXfkkFMUqYSvbk%2ByiheoL9IQEtHrWy%2FBTOtQtB2QWCQOVUBAr5vgmgp4iHW%2Fk%2FJ%2F9R0lIRHerD09V1H7yqlJx6rm8VQpVzDfZg9FvVwzrmjT%2FlBnr9m5n%2BjEfoD9ReZUaQ7rIhZ%2FzNkWDTeKnVceW8gQMCwFcWBS%2BIVdB7VSvYoN95ty4OOMXY%2Be44bGvN7VdxFOggp06Nuy5bJEMey%2FevCnR6IiIJE4e%2BDTiMDmZf2rhrkeCbbbIvDXOa2PrJHYjVqyPPamFyCBJYyEI%2BSUr8wFUGy%2BlQLeKaMYpwqLzhxC6w3qKcbNKhFO2tJE9HBUI08ZNSm77obovSqobls6m1U345aOsqR%2FU5V%2FSYqozWs8eV3ljFKQuosR4e7BacnTFQG8SshgkvTnmMcRwkZXF%2BrEsOvlXL0uFj4CiMGt%2B%2BKpwmySEyUTkWcUkxN1M2F8bL1rK%2BfGPr0V3QO3KvMwES3BJIl48lMmr0fA2bjNuUDUH6aISKhlM0xLSVFnBpfi1G9YIXVYi%2FKQqtQw14nQyQY6pgHWz6YzyoOYbZSoJUnN%2BCZfiYcY6u6yUcNB4D7vConl3P6klSYK%2FLXg0WL%2FYMaeWbo%2Fuuv47g3lkuQSDWNaBf%2BnbyvLfvINqvLWL0oQJ7ITEsEd4y7LkblELwG5OIYZVCvW5ns9SImtnQapmpZ7zGXfuchUdR9j9WAdChnYAOl4f7g2c8cW973STd7GOgZVfWBVe%2Bd34AGA2mVBHaYRsA1BSVvgXCEN&X-Amz-Signature=dcdedcee7ad8ce073a90fb54ace8897f67edada5d503603399b24d4aaa8f8e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMK245T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbz2JoF8BuxGz70RDsg7euC7aGAIXY1tXutTI6PPChQAiBMEksrZuGZtf7DKu13lM6oB2gZbWEA3tF7Hncuxx6rLCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMg7JsGNbr8WM%2BqOmlKtwD0zND%2FhEqzHa1oPvKULbPWI0Mih%2BjWvgCGjXqG6t9wdhqPJJtvWeRo2q%2B7I47gSHwM5zaOhlR4QAGMFD3GkUlsKfxWkMMIZYVW34OJjwU3Il%2FYXfkkFMUqYSvbk%2ByiheoL9IQEtHrWy%2FBTOtQtB2QWCQOVUBAr5vgmgp4iHW%2Fk%2FJ%2F9R0lIRHerD09V1H7yqlJx6rm8VQpVzDfZg9FvVwzrmjT%2FlBnr9m5n%2BjEfoD9ReZUaQ7rIhZ%2FzNkWDTeKnVceW8gQMCwFcWBS%2BIVdB7VSvYoN95ty4OOMXY%2Be44bGvN7VdxFOggp06Nuy5bJEMey%2FevCnR6IiIJE4e%2BDTiMDmZf2rhrkeCbbbIvDXOa2PrJHYjVqyPPamFyCBJYyEI%2BSUr8wFUGy%2BlQLeKaMYpwqLzhxC6w3qKcbNKhFO2tJE9HBUI08ZNSm77obovSqobls6m1U345aOsqR%2FU5V%2FSYqozWs8eV3ljFKQuosR4e7BacnTFQG8SshgkvTnmMcRwkZXF%2BrEsOvlXL0uFj4CiMGt%2B%2BKpwmySEyUTkWcUkxN1M2F8bL1rK%2BfGPr0V3QO3KvMwES3BJIl48lMmr0fA2bjNuUDUH6aISKhlM0xLSVFnBpfi1G9YIXVYi%2FKQqtQw14nQyQY6pgHWz6YzyoOYbZSoJUnN%2BCZfiYcY6u6yUcNB4D7vConl3P6klSYK%2FLXg0WL%2FYMaeWbo%2Fuuv47g3lkuQSDWNaBf%2BnbyvLfvINqvLWL0oQJ7ITEsEd4y7LkblELwG5OIYZVCvW5ns9SImtnQapmpZ7zGXfuchUdR9j9WAdChnYAOl4f7g2c8cW973STd7GOgZVfWBVe%2Bd34AGA2mVBHaYRsA1BSVvgXCEN&X-Amz-Signature=4e66be14d78fd960062eb08ec991ff3700393b6aee2148705421f09a1ccbf990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

