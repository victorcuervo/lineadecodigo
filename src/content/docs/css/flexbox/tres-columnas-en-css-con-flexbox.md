---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZFLDH5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICnqP%2BKqE8qqcVJIYj100xYSkVPB8wTCeQ2WcW1%2Bk1ZAAiAZys5zxiAO9HvUHAnUA4uETG8SBRvuP1N4Wtf9QGLaJSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMU0VuCXINsjZhkmduKtwDEla7DKHaRFUkqhgGa4Fy%2FXcPmz2yDs%2B1e1npLijML8VOMgqvR6LbhrKzcHLJJpN1XzZdiWCA1zAVvbClAp6lcc0bF2nkS6PnJMjRqHHsDFm9ouGwUz74uz6jBLJgy7Dkwzh3jTgdKM8EQ1lh0hlyBmO10G7PVJmevI3l40KryMdJafD%2BYKRBnuClzW%2BWQL5sTP9%2BmVbZFlqLI2Sx39TYMHwSkl%2BEHsIJOmvVWIDiLCQVvUd6ZjNqUouiXcWfltP4fiF%2BY7Hn2cE4ZoX9VTVgzjc7k70w4wMEXPOaTcnKFxMW%2FpujMBZlKjbGL%2BDjViXyo1N1nTGLALm8WcN5u3VT7Ov2%2BQb2LU%2FXzZ2izmr3%2FqOypyPzdBRla1ZM7SppgaZk520g%2BSzZOQmitcj5lhMgNzeWltAusfDlxnRlnhIC4PFdaqtORVQqVPJ%2BvKIiHhZswJl4OEc26cf%2FTLhQ7khfUK6HKH%2FkYCEim%2Fw0ke0v1zb7Fw2HWDmBGfhnY7wIrYBZBhBb2VXk7scpwkYP0w503ZkrALmhMnzAWbvR4VtJfgandOHBMvuCLS9pXWYWD%2FUY4MMITH1mIhrKAxoHUaHWMIRnhA331V%2F%2FrkUQ1aRa%2FOygcyy%2BRiLSvaxX%2BcUw2ObFyQY6pgGGo5PKR6hyUF7f%2FgCd%2BpsDdAI%2B6e%2FvYomBqoAhEIJ%2FAISZCLk4wAP1tOBXhZ4HVLCEOCXKteT5VN4i2KxljCTYKd%2FzvIahQfUJopfF2wOTzns2h%2BJevB2RLpD5yDWmNljmmakzz0fokcyyYzkWqM9JDprvACmc2z6o7wrWf42fLpRg3fcRqBY4FQpYduXnuoTRSxv2gxK%2BZnoehGQwX0j%2BRCn26n42&X-Amz-Signature=6c2124ed9d1781ce0ffd17311b687c30d39258bc22db12d7b1284521270e2e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZFLDH5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICnqP%2BKqE8qqcVJIYj100xYSkVPB8wTCeQ2WcW1%2Bk1ZAAiAZys5zxiAO9HvUHAnUA4uETG8SBRvuP1N4Wtf9QGLaJSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMU0VuCXINsjZhkmduKtwDEla7DKHaRFUkqhgGa4Fy%2FXcPmz2yDs%2B1e1npLijML8VOMgqvR6LbhrKzcHLJJpN1XzZdiWCA1zAVvbClAp6lcc0bF2nkS6PnJMjRqHHsDFm9ouGwUz74uz6jBLJgy7Dkwzh3jTgdKM8EQ1lh0hlyBmO10G7PVJmevI3l40KryMdJafD%2BYKRBnuClzW%2BWQL5sTP9%2BmVbZFlqLI2Sx39TYMHwSkl%2BEHsIJOmvVWIDiLCQVvUd6ZjNqUouiXcWfltP4fiF%2BY7Hn2cE4ZoX9VTVgzjc7k70w4wMEXPOaTcnKFxMW%2FpujMBZlKjbGL%2BDjViXyo1N1nTGLALm8WcN5u3VT7Ov2%2BQb2LU%2FXzZ2izmr3%2FqOypyPzdBRla1ZM7SppgaZk520g%2BSzZOQmitcj5lhMgNzeWltAusfDlxnRlnhIC4PFdaqtORVQqVPJ%2BvKIiHhZswJl4OEc26cf%2FTLhQ7khfUK6HKH%2FkYCEim%2Fw0ke0v1zb7Fw2HWDmBGfhnY7wIrYBZBhBb2VXk7scpwkYP0w503ZkrALmhMnzAWbvR4VtJfgandOHBMvuCLS9pXWYWD%2FUY4MMITH1mIhrKAxoHUaHWMIRnhA331V%2F%2FrkUQ1aRa%2FOygcyy%2BRiLSvaxX%2BcUw2ObFyQY6pgGGo5PKR6hyUF7f%2FgCd%2BpsDdAI%2B6e%2FvYomBqoAhEIJ%2FAISZCLk4wAP1tOBXhZ4HVLCEOCXKteT5VN4i2KxljCTYKd%2FzvIahQfUJopfF2wOTzns2h%2BJevB2RLpD5yDWmNljmmakzz0fokcyyYzkWqM9JDprvACmc2z6o7wrWf42fLpRg3fcRqBY4FQpYduXnuoTRSxv2gxK%2BZnoehGQwX0j%2BRCn26n42&X-Amz-Signature=033d2f715b82ece39f2b3dd1435a6e332b400b46a1a07e1c1decd33bd207b10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

