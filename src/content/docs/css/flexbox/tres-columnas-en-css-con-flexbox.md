---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBMSZK5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICguTmcnqTQ6R3p14bqEm5KHye5FLKxHsKeYVngcA0BJAiBXVfg1FK%2FD9t1g1EtvhMvKtUhMw83Jiaznf9HXNDbC4yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyqfmvjT1Xr2JX7QqKtwDxsCia6FP%2BbY%2BrPkbSqFRn%2Fa9HLKMCaZmZnDwQCf44%2FoRlF%2BFOa%2Fisu1HvLIkr7pml9AmAcxwO4kUm6jEUZ4SCz6H%2BPDUpfJl2U1ChLOzt7z7srO0V94rxd0TiwwxvQIy%2F7PH65biXDwNFhd4gC0N2mPmuPc9N%2BKW3Q1srjmjLoaKqYqkK2Fu1Y%2FK3ec%2B1%2FURMJoWBeOnmLYBdMtnIyc5BkHZhFgwKp0Id1enGIoh%2BZ4yty73G21C%2BtSHBcxw0wyK%2FmlLCYaXd9EC6Kf%2ButnbFivk0CvkxL%2FlUo15cBgYJAipJm31yZMCohxgJWdcDr81hZ%2B3KLoUTNB8%2Be16ewIj%2B7%2BwD6pLElNgZwJjEb3EuOeHL2fiwMufnV09GaPD3zFlcUJbLLTTHhTFlVcWH8WlyMRDra7pQ1B7luqwDLqxhrrlEQcZCnW6EbV%2BNTdOtEqN1vuF2qhLHo%2BRFjXZfXiSk7bN6iQPoJO%2FSENnAWpDm83dQn0CFHmmVEVn5fJLh35iBkm7jc3hdwo6yqmlZ8mp72KuLfM%2BCX3rR8cDa7KCJhfTcDscfzkiw0XSX4rBsEds70FBfRHst8URhMYYB1XmRzYNNySQVyupJhefcP4cobCsQzak4%2FPFVkLesDYws6%2FJyQY6pgGQWJYwxWnH7%2BqqYIFJfpHi9QOrXIqDF6%2B4t%2FEl%2BYZrs6NIQWmriLGDtyeOa5JmnFJcFlWwV8Aqdttpg6Ij2S1OWG2bPntkej5YU3WiJgVyO1q3rc9EijlBajQ0OKKz9VPOh4SHxLJtRlo%2FeRd5lU0qnZWosK%2FiRd9jrjGKaTEKPaSSB7DDcvcpatKZIyjwElJyCYkgRhqqyyZf8bmsd55%2BtluWhzB6&X-Amz-Signature=869df93f6988a2dd1b52c685b1b090324c170c28d2ab807a3a2408e6f8caa299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBMSZK5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICguTmcnqTQ6R3p14bqEm5KHye5FLKxHsKeYVngcA0BJAiBXVfg1FK%2FD9t1g1EtvhMvKtUhMw83Jiaznf9HXNDbC4yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMyqfmvjT1Xr2JX7QqKtwDxsCia6FP%2BbY%2BrPkbSqFRn%2Fa9HLKMCaZmZnDwQCf44%2FoRlF%2BFOa%2Fisu1HvLIkr7pml9AmAcxwO4kUm6jEUZ4SCz6H%2BPDUpfJl2U1ChLOzt7z7srO0V94rxd0TiwwxvQIy%2F7PH65biXDwNFhd4gC0N2mPmuPc9N%2BKW3Q1srjmjLoaKqYqkK2Fu1Y%2FK3ec%2B1%2FURMJoWBeOnmLYBdMtnIyc5BkHZhFgwKp0Id1enGIoh%2BZ4yty73G21C%2BtSHBcxw0wyK%2FmlLCYaXd9EC6Kf%2ButnbFivk0CvkxL%2FlUo15cBgYJAipJm31yZMCohxgJWdcDr81hZ%2B3KLoUTNB8%2Be16ewIj%2B7%2BwD6pLElNgZwJjEb3EuOeHL2fiwMufnV09GaPD3zFlcUJbLLTTHhTFlVcWH8WlyMRDra7pQ1B7luqwDLqxhrrlEQcZCnW6EbV%2BNTdOtEqN1vuF2qhLHo%2BRFjXZfXiSk7bN6iQPoJO%2FSENnAWpDm83dQn0CFHmmVEVn5fJLh35iBkm7jc3hdwo6yqmlZ8mp72KuLfM%2BCX3rR8cDa7KCJhfTcDscfzkiw0XSX4rBsEds70FBfRHst8URhMYYB1XmRzYNNySQVyupJhefcP4cobCsQzak4%2FPFVkLesDYws6%2FJyQY6pgGQWJYwxWnH7%2BqqYIFJfpHi9QOrXIqDF6%2B4t%2FEl%2BYZrs6NIQWmriLGDtyeOa5JmnFJcFlWwV8Aqdttpg6Ij2S1OWG2bPntkej5YU3WiJgVyO1q3rc9EijlBajQ0OKKz9VPOh4SHxLJtRlo%2FeRd5lU0qnZWosK%2FiRd9jrjGKaTEKPaSSB7DDcvcpatKZIyjwElJyCYkgRhqqyyZf8bmsd55%2BtluWhzB6&X-Amz-Signature=014bf1874f1dd643f3279b500f54448c647ebb79bdf45e6d387ff8c0a3df48cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

