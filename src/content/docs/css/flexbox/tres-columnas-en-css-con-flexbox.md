---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCCD345%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA9x0ubp8EMfTvrQS6%2Fu7J%2B%2FpqyHSl7mudtl4t7yPLKAiAyoE6Nvy8IYirDwWuDL2Ys3HvAATmSpB%2FWQOgA0TSiiiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhrL14ASc11BaFhKaKtwDnor6Mhuk2JLcqKPmQ4X8U3sAM2y3eBrzoew97qLQICLd8OZUnc7OPQsMuellfHHfh0dhM2k00wyjollZA32P5fwgxC1V%2BHsfSzQwtN34BVhwq0yEhaII32UfvSWX36wLVfHH3CXrdhCghiHZQPgdwv13ZxcFCc3p4XRoB%2F2jFCIqIHnJbtklGRr%2FH9OXWV%2FRIKlG9tkLqCA4bN1QR6f5qCHxDjSFLqq0QFWWfa2tsxqJu%2FX%2BpOORuV9aPIPMnl04MDyRI9ebRholKHWwjYxNR08CaN0dBfkWpJ%2F3zYXyLZCF7Hjw0eF%2F7LxMcTEUlNXeeM9FR3OqXRNaeq5pfjCyjJ6fprbgcvtQNjlOde3aFtJby8bTa2Jd9%2FbD4X%2B%2BHuHiY2oQjmdaubGl%2FchILgZKsKDXUJcJaK2CC7rurmljaWEq7%2F%2FhQhHFufNv50UlNwcsPqz%2BczhRTrKqS34d%2BuXXAT3JxmkZ7iukaNd%2FeOY6oBh5CJ%2FmXkXxFQyd7oed4vjkBXa3FI2O8HwuRv8lLICNUJMJNlQOjoYoxZcCsjm4EEBvd%2FS2TGzpwXHh%2FhXWxCphvdwmsmhYfB0ZlWNG21X5H5CL96PkJCEN%2BWjZmBo6Sb1GGAI5x95ZgE7cOZQw1rTZyQY6pgFl38CzB%2BhHzcZjcUzO8rwcqj8kEo3rOgVFujObeAaagp30lDOBhd0Hf9uh1r9oVph9pK%2BAmxr9uRwgLM5w1My9IgOYEUH8yEoI3yIsLnMGdBoM%2BlOWp91TqAk5jMyRPlRplfD%2B122ls4GmlQvXtLh7PsiDfRB64Rc9WTzccq1NJH3scamBHCRvmA1F0bVbPQNHGA66UYPipMLrjw%2FFfA5n9AbL2cN5&X-Amz-Signature=2399ed42980abe692bf4c1bae832f1a7da70bf88c8c9e04bea0755419efb78c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCCD345%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA9x0ubp8EMfTvrQS6%2Fu7J%2B%2FpqyHSl7mudtl4t7yPLKAiAyoE6Nvy8IYirDwWuDL2Ys3HvAATmSpB%2FWQOgA0TSiiiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhrL14ASc11BaFhKaKtwDnor6Mhuk2JLcqKPmQ4X8U3sAM2y3eBrzoew97qLQICLd8OZUnc7OPQsMuellfHHfh0dhM2k00wyjollZA32P5fwgxC1V%2BHsfSzQwtN34BVhwq0yEhaII32UfvSWX36wLVfHH3CXrdhCghiHZQPgdwv13ZxcFCc3p4XRoB%2F2jFCIqIHnJbtklGRr%2FH9OXWV%2FRIKlG9tkLqCA4bN1QR6f5qCHxDjSFLqq0QFWWfa2tsxqJu%2FX%2BpOORuV9aPIPMnl04MDyRI9ebRholKHWwjYxNR08CaN0dBfkWpJ%2F3zYXyLZCF7Hjw0eF%2F7LxMcTEUlNXeeM9FR3OqXRNaeq5pfjCyjJ6fprbgcvtQNjlOde3aFtJby8bTa2Jd9%2FbD4X%2B%2BHuHiY2oQjmdaubGl%2FchILgZKsKDXUJcJaK2CC7rurmljaWEq7%2F%2FhQhHFufNv50UlNwcsPqz%2BczhRTrKqS34d%2BuXXAT3JxmkZ7iukaNd%2FeOY6oBh5CJ%2FmXkXxFQyd7oed4vjkBXa3FI2O8HwuRv8lLICNUJMJNlQOjoYoxZcCsjm4EEBvd%2FS2TGzpwXHh%2FhXWxCphvdwmsmhYfB0ZlWNG21X5H5CL96PkJCEN%2BWjZmBo6Sb1GGAI5x95ZgE7cOZQw1rTZyQY6pgFl38CzB%2BhHzcZjcUzO8rwcqj8kEo3rOgVFujObeAaagp30lDOBhd0Hf9uh1r9oVph9pK%2BAmxr9uRwgLM5w1My9IgOYEUH8yEoI3yIsLnMGdBoM%2BlOWp91TqAk5jMyRPlRplfD%2B122ls4GmlQvXtLh7PsiDfRB64Rc9WTzccq1NJH3scamBHCRvmA1F0bVbPQNHGA66UYPipMLrjw%2FFfA5n9AbL2cN5&X-Amz-Signature=4edd38c7c1566879e083613a2f85a0c5a005cce0fe1218a4e6cf67a3213e8762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

