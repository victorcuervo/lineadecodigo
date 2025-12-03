---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE44CYWQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEndQkWTdwUzCN6QzaMsAErzeRSMMeJPOpXH2ESl2qPpAiEAxd2n4MFjko5NdVo7ZM%2F862eoioFWtFh0Z51OpqqKBzcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGwETYMAgyxe4KL2UyrcA3UWt4O1wLnoaC9iURWM570abeEMZXjqwjI%2FOeVSU24IkRZie69cO8PXJJ%2BBuufmDNP35gSeD1Aw%2BC0Rxclv87VeK3zoFsmAChU5BzMSGU4sypmkl%2B9PDzP%2BiYjPTj1g64yc4dbFH0A6EKbfKJS2%2F3xCiuVz08j4LEpKB%2BYZyUkFbwBX%2BdsO4qWJ9edB5tAB8xx5GKsaRLvhi81eA%2B1wBjLFLlcD%2BrhhUCpGP7loDXcou7YozN6fi7j7Cjl1cU2gyAI1YgnChS38rydNeGt3y1lGuSaEn4Y4hlXavsqLomm9j2ihO0OIzfv7l1rPlvitNKzlQDLqavlaE5iNuWk7PdszUDOlakwmM7K0t1EJNfMERsLV56Pl69372%2BwpT%2FkBDy%2B%2FTWWJuxrip4M2QafmqcHm4AJtDId%2BHYbIhB3yCi%2B6ViKo4pzv506rN%2B9BP5sXXJfWyUEbwKbrDyqDc8tVxVwG%2F5DaCbNfac8oKX3lTMOe5hPgxf%2FskJs1soHx99C3s4XkyquK8NwkN9xQAnutZUF6bQtqqs3WfxXE0et0MaKCH%2FPS38dLMj5JgFyuwQQVfOiMEgb7q%2BDMa8iU1bsQXpTdDDwNjBQr%2BOTXTob6jdsvnyVWDbEjxsKiyEEYMIvWv8kGOqUBNdI4ztdkYV0tF1FPVJpY4RomGIXGByY21sFJv07yihHHBLRUKOPDrdZpHBgZ%2FnkYDQYM6loZDLPPTJNGqVSffTi1a%2BVgWG7gVZVU%2Be5yYazWRcBfAnTQ4bXPlhHcGpu7CJ52zw7TbTm2Y02k%2FFABH0MtqaZMG0WJB4YUr0PIKYEPX%2BzuWntMkXiktTR09Ukg%2F2%2FO6ocHFY8lQKewq43m6JMO6tCf&X-Amz-Signature=d4338d79274645d27511e45a13ca71d463bfcf3585af6e06af0331dbcf39a1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE44CYWQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEndQkWTdwUzCN6QzaMsAErzeRSMMeJPOpXH2ESl2qPpAiEAxd2n4MFjko5NdVo7ZM%2F862eoioFWtFh0Z51OpqqKBzcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGwETYMAgyxe4KL2UyrcA3UWt4O1wLnoaC9iURWM570abeEMZXjqwjI%2FOeVSU24IkRZie69cO8PXJJ%2BBuufmDNP35gSeD1Aw%2BC0Rxclv87VeK3zoFsmAChU5BzMSGU4sypmkl%2B9PDzP%2BiYjPTj1g64yc4dbFH0A6EKbfKJS2%2F3xCiuVz08j4LEpKB%2BYZyUkFbwBX%2BdsO4qWJ9edB5tAB8xx5GKsaRLvhi81eA%2B1wBjLFLlcD%2BrhhUCpGP7loDXcou7YozN6fi7j7Cjl1cU2gyAI1YgnChS38rydNeGt3y1lGuSaEn4Y4hlXavsqLomm9j2ihO0OIzfv7l1rPlvitNKzlQDLqavlaE5iNuWk7PdszUDOlakwmM7K0t1EJNfMERsLV56Pl69372%2BwpT%2FkBDy%2B%2FTWWJuxrip4M2QafmqcHm4AJtDId%2BHYbIhB3yCi%2B6ViKo4pzv506rN%2B9BP5sXXJfWyUEbwKbrDyqDc8tVxVwG%2F5DaCbNfac8oKX3lTMOe5hPgxf%2FskJs1soHx99C3s4XkyquK8NwkN9xQAnutZUF6bQtqqs3WfxXE0et0MaKCH%2FPS38dLMj5JgFyuwQQVfOiMEgb7q%2BDMa8iU1bsQXpTdDDwNjBQr%2BOTXTob6jdsvnyVWDbEjxsKiyEEYMIvWv8kGOqUBNdI4ztdkYV0tF1FPVJpY4RomGIXGByY21sFJv07yihHHBLRUKOPDrdZpHBgZ%2FnkYDQYM6loZDLPPTJNGqVSffTi1a%2BVgWG7gVZVU%2Be5yYazWRcBfAnTQ4bXPlhHcGpu7CJ52zw7TbTm2Y02k%2FFABH0MtqaZMG0WJB4YUr0PIKYEPX%2BzuWntMkXiktTR09Ukg%2F2%2FO6ocHFY8lQKewq43m6JMO6tCf&X-Amz-Signature=7fe14a971b52f364e818825c3ef987aca14893b9b22906dd8155662a7b0d5e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

