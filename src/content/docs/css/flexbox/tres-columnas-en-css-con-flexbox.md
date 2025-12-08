---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I345TXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bkf%2FjUGMfc60WCKYXD1fGiv1DGn9CToIAEE75roYJfwIhANcJeoT377VplX9YmQcwtZhLM4zKZntcER0h%2B96l%2FR78KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BB7HCjeTRXRpK4q3APUxf6mZQj8s1J2H5h5uK68%2Fdg%2Bfn8vza8EbilOBUcmWDrTagWYyi67dRC9tJN%2FhCmXNhL%2BmurGTKoI3hUCwEuBwbsj44DiM54tcE0hVl0kQcEaK4%2BCtVIGBeNjncc8bivHTKCDFlSmLNFsmB%2BL%2BS28CjinNCwyz3nkWJ1xmKXhgX2hmHIeHnofjw5QziJ54H79cIfPWJJ5D0a0uDL9SC8RTe4%2B6SUaoO9EOsKGX21kEQITyN4Iko3BbPy%2Be6aoZdEPa%2BtCgnIEnEzS%2FpQP%2F99g2ILIc43v%2FT58Edu%2Fe%2B1wg7LZbPkwisTg8W9FWIDS%2FO1Za%2BG4C5XBcK%2FMNazd40y6t0ENJIXFAcMmzv%2FYmgFUjRcYqY5wrxccICgsIp%2FJItnobKHZuj9tFO04xmz2Fb70MAO%2FxIFh6W1bdtCXSNBnJ1kW5WU7ItnLaMXmPEmIMYpu96Gk40%2BIZICTajNZVQnvdCzyDR%2FxjMRm4VKuITcXVAQMmCoLbQyb3l1aipuh%2F%2BoVj3zGd5ncRf05cEGdBOduJ9s5SBdZzW4cZysJ9WGxxsaafxPIMhMi%2BpwV%2FB58lWiGnXhRGB%2FDBEw63I1Erb3xxwSBzliywG0eDDSFA6wHyRyHAJYjiInFOr4GqDDc0djJBjqkAd8lKg%2Ff9n0O6cYBfywOCzmVf9gx%2BF97%2BT0c3XeaZhfzpJqAP%2BTR2rMp9AcoJG1UCE4k8xbBO8jNmaXtAhqb0byhMogCiti3BCsA5If%2F4%2FQN98KjVqyEC6WbQ3e5RB3pvmzue%2FC4k4GGoyFiT5D6HIWlXjkSVEv7X9iVyprHVsdqfCwjjpxMhoQyidcMce1LNn98FpBVGq10odhZLYvxQt5ZsNg4&X-Amz-Signature=806c6e96e6c1972e16cc74abd779e82722e4854f387c35ef0339ea534865ab38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I345TXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bkf%2FjUGMfc60WCKYXD1fGiv1DGn9CToIAEE75roYJfwIhANcJeoT377VplX9YmQcwtZhLM4zKZntcER0h%2B96l%2FR78KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLs%2BB7HCjeTRXRpK4q3APUxf6mZQj8s1J2H5h5uK68%2Fdg%2Bfn8vza8EbilOBUcmWDrTagWYyi67dRC9tJN%2FhCmXNhL%2BmurGTKoI3hUCwEuBwbsj44DiM54tcE0hVl0kQcEaK4%2BCtVIGBeNjncc8bivHTKCDFlSmLNFsmB%2BL%2BS28CjinNCwyz3nkWJ1xmKXhgX2hmHIeHnofjw5QziJ54H79cIfPWJJ5D0a0uDL9SC8RTe4%2B6SUaoO9EOsKGX21kEQITyN4Iko3BbPy%2Be6aoZdEPa%2BtCgnIEnEzS%2FpQP%2F99g2ILIc43v%2FT58Edu%2Fe%2B1wg7LZbPkwisTg8W9FWIDS%2FO1Za%2BG4C5XBcK%2FMNazd40y6t0ENJIXFAcMmzv%2FYmgFUjRcYqY5wrxccICgsIp%2FJItnobKHZuj9tFO04xmz2Fb70MAO%2FxIFh6W1bdtCXSNBnJ1kW5WU7ItnLaMXmPEmIMYpu96Gk40%2BIZICTajNZVQnvdCzyDR%2FxjMRm4VKuITcXVAQMmCoLbQyb3l1aipuh%2F%2BoVj3zGd5ncRf05cEGdBOduJ9s5SBdZzW4cZysJ9WGxxsaafxPIMhMi%2BpwV%2FB58lWiGnXhRGB%2FDBEw63I1Erb3xxwSBzliywG0eDDSFA6wHyRyHAJYjiInFOr4GqDDc0djJBjqkAd8lKg%2Ff9n0O6cYBfywOCzmVf9gx%2BF97%2BT0c3XeaZhfzpJqAP%2BTR2rMp9AcoJG1UCE4k8xbBO8jNmaXtAhqb0byhMogCiti3BCsA5If%2F4%2FQN98KjVqyEC6WbQ3e5RB3pvmzue%2FC4k4GGoyFiT5D6HIWlXjkSVEv7X9iVyprHVsdqfCwjjpxMhoQyidcMce1LNn98FpBVGq10odhZLYvxQt5ZsNg4&X-Amz-Signature=a976df2813a66393f622b33e355ea6225798bff8a14689eb3507b9dfcbe0d00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

