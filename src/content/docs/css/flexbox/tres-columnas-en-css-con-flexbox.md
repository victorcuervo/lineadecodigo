---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625RIQNAT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCido3UiP%2FwCpNnfslShKTWy1ZzavQ6BOc85O2Y4YQmJAIgdL8yTUKwYUjZk%2FrCnf%2BLqTiCfyhtsH%2Bm%2FVX5WU%2BrKsMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEgA0PkMlgQowrwa1ircAyhei2glyuczJ1%2BmQR75PhWDDKXkozJo0N%2FFt0ysGsLH67ed%2BjNOO7Z5ZL4ghs65ZzGF7xngg9G8WD5TUEuuO2HLbd%2FmV%2B9WrVI4B51hCHylN%2Fh5aXOuRS52ZubvSClEg2RjkfekXJrT4x0TdIxECrTNuUZ3OGqKy0%2BkoeiNcSH27bnPxXJFuP7UYs7WV6Z31rkQ2dIYLIuQa1HIDSKjvO3hI%2F3Mksr885lv%2Bb9om3yuBAm81j%2B%2F%2BrmHs6Sca%2Fn6AL9CivLvpArFzOpRBLDx0Gyno22fuEc1hQoTjeVwHbI91fqlfrbHt99pu849etJVeaiiJnJgeTIKKypLHuOOeJFk8iOc9xh9sVesjwxjhxKMOCa%2FVbyPmpYokmf8EdljcWkc3s3jZCzZdo8WmQRGrXlGacLEiOJUo7imdJDwiuk2t8ZNcnLq56mDePzOxBbM%2BK4VlyKQINzUuyi2VKmqsujb1qWmMuisWPnE50jjVjYkzBrOnTFp981puzes2ouDeIxn%2F1E%2B29xz%2Fbc2TbBAHMfxpSxj8sVi6vwUGVZa5XUCcjR9snS%2Fk0m1THa9B%2FAO%2Frmzi0eJ81zqibVPMvqTFA5lGXhUYP51BpJa5CU80J4AXNm14Serk0iiDw%2FPMLOGxckGOqUBDvsdRoAtSQsLi%2B2pnZfZTpwXgQoCOyxXMYQIEJk4afMWoxPb8CBch7j6IYYbFAcCYYZ%2FMpxl2fHtb5oWwPQp%2BI1aBvo2tjcH9vtw7YcbWmtU6Nx6mUEXb1GD0CVBFhZyIJSrtW5HiW8DCxAzQvtRhDYZXBaSre0cvn1CZdxyo4qhWosTjXS8O106cOAr1jvP42diK3C%2FnBBIC%2B69bLte1sAo7x2x&X-Amz-Signature=a04526867877d97217294651e130023fca752dcf1fb506ce253a424f53be5030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625RIQNAT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCido3UiP%2FwCpNnfslShKTWy1ZzavQ6BOc85O2Y4YQmJAIgdL8yTUKwYUjZk%2FrCnf%2BLqTiCfyhtsH%2Bm%2FVX5WU%2BrKsMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEgA0PkMlgQowrwa1ircAyhei2glyuczJ1%2BmQR75PhWDDKXkozJo0N%2FFt0ysGsLH67ed%2BjNOO7Z5ZL4ghs65ZzGF7xngg9G8WD5TUEuuO2HLbd%2FmV%2B9WrVI4B51hCHylN%2Fh5aXOuRS52ZubvSClEg2RjkfekXJrT4x0TdIxECrTNuUZ3OGqKy0%2BkoeiNcSH27bnPxXJFuP7UYs7WV6Z31rkQ2dIYLIuQa1HIDSKjvO3hI%2F3Mksr885lv%2Bb9om3yuBAm81j%2B%2F%2BrmHs6Sca%2Fn6AL9CivLvpArFzOpRBLDx0Gyno22fuEc1hQoTjeVwHbI91fqlfrbHt99pu849etJVeaiiJnJgeTIKKypLHuOOeJFk8iOc9xh9sVesjwxjhxKMOCa%2FVbyPmpYokmf8EdljcWkc3s3jZCzZdo8WmQRGrXlGacLEiOJUo7imdJDwiuk2t8ZNcnLq56mDePzOxBbM%2BK4VlyKQINzUuyi2VKmqsujb1qWmMuisWPnE50jjVjYkzBrOnTFp981puzes2ouDeIxn%2F1E%2B29xz%2Fbc2TbBAHMfxpSxj8sVi6vwUGVZa5XUCcjR9snS%2Fk0m1THa9B%2FAO%2Frmzi0eJ81zqibVPMvqTFA5lGXhUYP51BpJa5CU80J4AXNm14Serk0iiDw%2FPMLOGxckGOqUBDvsdRoAtSQsLi%2B2pnZfZTpwXgQoCOyxXMYQIEJk4afMWoxPb8CBch7j6IYYbFAcCYYZ%2FMpxl2fHtb5oWwPQp%2BI1aBvo2tjcH9vtw7YcbWmtU6Nx6mUEXb1GD0CVBFhZyIJSrtW5HiW8DCxAzQvtRhDYZXBaSre0cvn1CZdxyo4qhWosTjXS8O106cOAr1jvP42diK3C%2FnBBIC%2B69bLte1sAo7x2x&X-Amz-Signature=51ee41c56d860826d0f901e780ffe895dc8ab9df6e690b22a383897666cbf43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

