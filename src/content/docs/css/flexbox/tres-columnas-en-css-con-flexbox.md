---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2CH2Z3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH3ux1wZERIfhndq5tGnfrBCrhkf%2BH8CyG7U5E0%2BnvzAiEAwrYW4VijCj%2BR1EikfNdfqFKmwiyLn3wwpIVZ5d7DJJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkGiSUBonnbFdVnsCrcA3TWYCgfGpv348cAPeQcESh%2BXLIORy4mjG0iUX6IpdEAcAAQDP3ME%2FoyCoxobb5vZb9ziO5Ha1EboqcqjJ9VIh%2Bbywp%2FgBbpe83X6jxpDvZNStlPdMD19BWWLQjvCL9jLTyY%2BnVSUoP2DE79kE%2BSS%2F94fPNAKahZgDSc4ameZs35F7fVEVCuBbyK6Yk3DvlKLqSlFEYTG53q1PptC0bbhEiWJnX3NOsX8LSnFd7z5zZZ0I36XpwruZo4v2ccMw8ZvWcp0pcEsVRiGKMg6Ei6MiRajmeCoCkhFMAo8URyTqNicJGxluMGniDvvzBIMlexTzgnfKDbTV9krfGw9h9fY30drNdlnTUmBmNXt1RWGuLyMKhOyOUUvzdxeNy0iaNNyQKldkUnT6Ob5hYfacgpPgiDARc6%2BxwlmqcGvVvfUgNX21pFvkwEYwGkr7BQeJMem2lgps%2BGPNLyp12SWYQgVao3rGXE0%2BIY8G09ruC1zybtjPGPtMo4Q6NZfIWpQGYZD8Qf58FmN0ua6J%2FOAk9KkdbYJKoMGsQOUMoxAwoTGfLkUyMu3eJMsMd69AEhS4CYVcSqOyE9WFJSn3zA9v4ZAf%2BEf5q67hDPUrIH3YNw3kgQeu0xbp3Dw3zes%2FIoMOmH38kGOqUBfkhPMAjLBAIkxDi8irWWS2OqZukyrcy2cIwGK%2ByT4SKmyaZDfW5AdN%2FCUgsviJFJKGoXj8R6zsNiHAeoj7oTNMAqZ%2BAnOza%2BVQk8K6AY7E4vA%2B7LvrrupTzrqK4G8TDRZmA4yQ71Pha9%2BKN2vw8YbjzWfeOAHN6W7kgckBTizVM5aSkgsa7vor09PQgTr52cXJK2dwUlk852ur0F0tSm6DuTWyRl&X-Amz-Signature=d808e628b202677764803310246fd611597aedab251eb4038fac9402a9aa7864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN2CH2Z3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDH3ux1wZERIfhndq5tGnfrBCrhkf%2BH8CyG7U5E0%2BnvzAiEAwrYW4VijCj%2BR1EikfNdfqFKmwiyLn3wwpIVZ5d7DJJ4qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkGiSUBonnbFdVnsCrcA3TWYCgfGpv348cAPeQcESh%2BXLIORy4mjG0iUX6IpdEAcAAQDP3ME%2FoyCoxobb5vZb9ziO5Ha1EboqcqjJ9VIh%2Bbywp%2FgBbpe83X6jxpDvZNStlPdMD19BWWLQjvCL9jLTyY%2BnVSUoP2DE79kE%2BSS%2F94fPNAKahZgDSc4ameZs35F7fVEVCuBbyK6Yk3DvlKLqSlFEYTG53q1PptC0bbhEiWJnX3NOsX8LSnFd7z5zZZ0I36XpwruZo4v2ccMw8ZvWcp0pcEsVRiGKMg6Ei6MiRajmeCoCkhFMAo8URyTqNicJGxluMGniDvvzBIMlexTzgnfKDbTV9krfGw9h9fY30drNdlnTUmBmNXt1RWGuLyMKhOyOUUvzdxeNy0iaNNyQKldkUnT6Ob5hYfacgpPgiDARc6%2BxwlmqcGvVvfUgNX21pFvkwEYwGkr7BQeJMem2lgps%2BGPNLyp12SWYQgVao3rGXE0%2BIY8G09ruC1zybtjPGPtMo4Q6NZfIWpQGYZD8Qf58FmN0ua6J%2FOAk9KkdbYJKoMGsQOUMoxAwoTGfLkUyMu3eJMsMd69AEhS4CYVcSqOyE9WFJSn3zA9v4ZAf%2BEf5q67hDPUrIH3YNw3kgQeu0xbp3Dw3zes%2FIoMOmH38kGOqUBfkhPMAjLBAIkxDi8irWWS2OqZukyrcy2cIwGK%2ByT4SKmyaZDfW5AdN%2FCUgsviJFJKGoXj8R6zsNiHAeoj7oTNMAqZ%2BAnOza%2BVQk8K6AY7E4vA%2B7LvrrupTzrqK4G8TDRZmA4yQ71Pha9%2BKN2vw8YbjzWfeOAHN6W7kgckBTizVM5aSkgsa7vor09PQgTr52cXJK2dwUlk852ur0F0tSm6DuTWyRl&X-Amz-Signature=3512d3b55a36aa3a3e556d53873b2753fc63d44490e8d64cb7daaa7ddd2d18a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

