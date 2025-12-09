---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXC2JNZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwivjQHbhz1aqL3fpDP4YeOcmvnyUb7WjU05yiWnWVoAiEAqLaWVFZwf%2Boyr%2FSKOlAdieILvw4P7dJ%2FGYI7l5YR0TQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxZB9LT8Gw%2F1OnufyrcA0v0K%2Bd7AOMwzStmmJbz8lV%2Fvi14ujz%2BMApWsCz7EOoX5OKc62o2mJb6fi2aApfSiiafwxYzFbiRl3tCSa7i1fdbRbdfCW%2Fup5qhv7M1y1bvg2wf1lF%2FY3nxTS8BKV3EnBW95Bv%2FVnHcNbUHhrF%2B0nD%2B0rZTtsCNBnGCJi3nQlPHXG1vOuUxKKv0qHCmSnUrHEUoo8obEUzUkXybwD8pjTnLYpbnnfrBrNvYvqHyN2JAo2GRau%2FW6J8Te2%2BO6puDldoD34VU%2FtafYD%2FUxYaFVrwHtDZ51ZkZe4a5px6woXL3cDbJjPre0PuFqeu55Z5FCXrTlzU4Ofbcd5Y3qh%2FZw2Y6d5Oogw1Zi6ng7fPcPsqCFAS9kXcVfMRdhMig2AKAcWvC7HClLBCbkOwm6Bl%2FNgWdFd8rXPL1e%2FRICK%2FZp7LqYKB2gf6M6N4C9LsVLNmzrwuvmCJtBDrfthff15oBHrW3GOkCjvr%2BkJ6DgvKHJVKoLf8bmANYLTghFjbeXrskGXaxazuroDfjF9eYtMgR1DpMLDQkwMrgYnyCds30SRjaJM0VA1o6i%2FZWCZapIj27hGO8V47%2Fz%2BnxXLCcOGXhJjEAIfXtQnhJKYTO1tU4xlE6b059Iewm5mORoKYwMJrl3skGOqUBDNEEUlm%2FurfclJlAzi%2BDkPt5s8RN9WNM2oHxvbcYKpixFWZ%2F7LSWWNxgQAOpzEyQPEFoiwVVLkfIy4NkVt4ATbg369nNnrMwm0l43kVYmZxsMzG3%2F1x7FCnsFalYYD7BbO4JluFs06b4u0Ywgh94MzctfJu%2FRmUlxDcikDFwuzc204hNVGwHfAgz2axXP%2BVp74QyKJ5Ivrxlo2j6jAXw3x6dKNJq&X-Amz-Signature=8beecd96380d34a11781eee387bef12d82ea4be212145351ec40ead5aa55c61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXC2JNZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwivjQHbhz1aqL3fpDP4YeOcmvnyUb7WjU05yiWnWVoAiEAqLaWVFZwf%2Boyr%2FSKOlAdieILvw4P7dJ%2FGYI7l5YR0TQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxZB9LT8Gw%2F1OnufyrcA0v0K%2Bd7AOMwzStmmJbz8lV%2Fvi14ujz%2BMApWsCz7EOoX5OKc62o2mJb6fi2aApfSiiafwxYzFbiRl3tCSa7i1fdbRbdfCW%2Fup5qhv7M1y1bvg2wf1lF%2FY3nxTS8BKV3EnBW95Bv%2FVnHcNbUHhrF%2B0nD%2B0rZTtsCNBnGCJi3nQlPHXG1vOuUxKKv0qHCmSnUrHEUoo8obEUzUkXybwD8pjTnLYpbnnfrBrNvYvqHyN2JAo2GRau%2FW6J8Te2%2BO6puDldoD34VU%2FtafYD%2FUxYaFVrwHtDZ51ZkZe4a5px6woXL3cDbJjPre0PuFqeu55Z5FCXrTlzU4Ofbcd5Y3qh%2FZw2Y6d5Oogw1Zi6ng7fPcPsqCFAS9kXcVfMRdhMig2AKAcWvC7HClLBCbkOwm6Bl%2FNgWdFd8rXPL1e%2FRICK%2FZp7LqYKB2gf6M6N4C9LsVLNmzrwuvmCJtBDrfthff15oBHrW3GOkCjvr%2BkJ6DgvKHJVKoLf8bmANYLTghFjbeXrskGXaxazuroDfjF9eYtMgR1DpMLDQkwMrgYnyCds30SRjaJM0VA1o6i%2FZWCZapIj27hGO8V47%2Fz%2BnxXLCcOGXhJjEAIfXtQnhJKYTO1tU4xlE6b059Iewm5mORoKYwMJrl3skGOqUBDNEEUlm%2FurfclJlAzi%2BDkPt5s8RN9WNM2oHxvbcYKpixFWZ%2F7LSWWNxgQAOpzEyQPEFoiwVVLkfIy4NkVt4ATbg369nNnrMwm0l43kVYmZxsMzG3%2F1x7FCnsFalYYD7BbO4JluFs06b4u0Ywgh94MzctfJu%2FRmUlxDcikDFwuzc204hNVGwHfAgz2axXP%2BVp74QyKJ5Ivrxlo2j6jAXw3x6dKNJq&X-Amz-Signature=e6a294069dac70fc4814bed486c14109b555ded5b953679991744351f65e31d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

