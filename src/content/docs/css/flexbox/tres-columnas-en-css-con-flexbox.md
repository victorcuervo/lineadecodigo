---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6TKU4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2aX774DuPg7Q9TokfSYd3h6G8F62I0UUrr48cv1z%2FwIgOWmavyTr1JtrhsjomyGF7j9pZ2weyCuKxAia3vGAq0wq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKh5CzYMvsCDsk2VtyrcA1%2BFDKzBWndWOG%2BjK4GqRwJB9oCTyjaa%2Fgrdj%2BVee8JfJVqMiLg9vFtc28JxBrfPJRyHlaWleqjAdC%2B9jym0tIcoBn941lg2u7aGeBnkDKeG%2Buxj%2BudWqv5v1jusJm%2FnmF3vzfOdKUKRtCx5eVMXuPbg4X32ZYZHEmIZZyeBJcgb72uU6tvmY3kUO3nCY5c42b6%2F%2BVYIkKvg7G2rcoEdmFakHkSjWnxSvzoIaQo0EujS6LBSLqhX4wTq4m7NnRsVToFz9tgOCTOIby79hWYvppZx1h7W082aqcwCYgU3GCVJIu3qhgq7nhghvRzpqLLutEhn5xYfxN6UuqUH03ZE1x%2Fec54aJ1TywV0NB8gn7MtcDy2Z6OubmoRxJAWy4noqn0suvwh0OJ0Y%2Ff7Jue4QBms1j1rQDuY375lAsaWTsHzZS7uteQsevvBAbfQ7HDiITtRw%2FxeraGRX12ruFIuXQlAoTuQlWM596lfdgjexqLLFoj07EkGwIPBuy482tPLm9j8y6usbQynTYrB%2Bp%2BMQs1yssrZHpR9Zp0L%2BCo6RA09OPQuKyn%2BR8cEb98qDzucnzGKZPrlY9WqDpOOu6%2FPReyhDHSk%2Fwa5BROhaUcPT9j14nWnEtmHXAyjqbOgHMLqm0MkGOqUBIxhbM6JvWVbDL52Z6vuLoKO126tI29OrMhSgtznRlpkq%2BSDLlgWGr5e%2F0VOgORQ8UJKNgjbSkM%2BDeGRNiqVP%2FtIiTZXDIbJkaKp7tzb%2Ben07w2%2B%2Bt1qsN%2BsAGAtoTUFSo%2FtzaBFHusTKbFZZQ2%2FJkDJncBty2%2BZFwgvrtj0kT5DrxwgUBiSIwIwrwNOF7JtXJdnVINYQyQuZVMcxudBTrj3Pcyz%2F&X-Amz-Signature=449223a8fd45feb35de611cc927760217ef6787c99f0694007fe7588297cfd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6TKU4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj2aX774DuPg7Q9TokfSYd3h6G8F62I0UUrr48cv1z%2FwIgOWmavyTr1JtrhsjomyGF7j9pZ2weyCuKxAia3vGAq0wq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKh5CzYMvsCDsk2VtyrcA1%2BFDKzBWndWOG%2BjK4GqRwJB9oCTyjaa%2Fgrdj%2BVee8JfJVqMiLg9vFtc28JxBrfPJRyHlaWleqjAdC%2B9jym0tIcoBn941lg2u7aGeBnkDKeG%2Buxj%2BudWqv5v1jusJm%2FnmF3vzfOdKUKRtCx5eVMXuPbg4X32ZYZHEmIZZyeBJcgb72uU6tvmY3kUO3nCY5c42b6%2F%2BVYIkKvg7G2rcoEdmFakHkSjWnxSvzoIaQo0EujS6LBSLqhX4wTq4m7NnRsVToFz9tgOCTOIby79hWYvppZx1h7W082aqcwCYgU3GCVJIu3qhgq7nhghvRzpqLLutEhn5xYfxN6UuqUH03ZE1x%2Fec54aJ1TywV0NB8gn7MtcDy2Z6OubmoRxJAWy4noqn0suvwh0OJ0Y%2Ff7Jue4QBms1j1rQDuY375lAsaWTsHzZS7uteQsevvBAbfQ7HDiITtRw%2FxeraGRX12ruFIuXQlAoTuQlWM596lfdgjexqLLFoj07EkGwIPBuy482tPLm9j8y6usbQynTYrB%2Bp%2BMQs1yssrZHpR9Zp0L%2BCo6RA09OPQuKyn%2BR8cEb98qDzucnzGKZPrlY9WqDpOOu6%2FPReyhDHSk%2Fwa5BROhaUcPT9j14nWnEtmHXAyjqbOgHMLqm0MkGOqUBIxhbM6JvWVbDL52Z6vuLoKO126tI29OrMhSgtznRlpkq%2BSDLlgWGr5e%2F0VOgORQ8UJKNgjbSkM%2BDeGRNiqVP%2FtIiTZXDIbJkaKp7tzb%2Ben07w2%2B%2Bt1qsN%2BsAGAtoTUFSo%2FtzaBFHusTKbFZZQ2%2FJkDJncBty2%2BZFwgvrtj0kT5DrxwgUBiSIwIwrwNOF7JtXJdnVINYQyQuZVMcxudBTrj3Pcyz%2F&X-Amz-Signature=dd25b44091493a03e4c2aef671b8d97a9e3ba62558b1927a1875506afde127d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

