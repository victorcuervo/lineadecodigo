---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIF2UISH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2FRXypobUbN87zJnPSzB90yYdBiZk2hU0WXgbxlYO%2BAIhAPuhBcuvGaL9KWue78cjS7%2Fgde07j6K2n5rzfFYtEVXLKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDKpyY0zfgEj%2Fk9rYq3AOmEXTTzaRkMXKbAgxpO4wcEN2wv0mpashR6VWLCGtNxIVzHKE5WejnOIrJmAObRaQboqDae6JAwXTKAyMKTb3eBM9d1IuxMlik6y3BzBzJQXbKoKCmZr4o96x0tMGzK5TPDd34wtcW8LHYeEY867K1nZIKgQ5cPD0vnIRvrrMcf%2B%2Bc6plykct5KhGTaWF%2FMUyizw2SZyUzdSuV9v5Np0eCDBF3ekUxaptfpra%2FhOv2AG9BwBIX5VsaxfGyw1DUZL5BVsSKEw610JNLtPfA4cmbXavuQ2fWGLiFrxM25e0GwIypU6786tSFwrJwmnH5ickOE0tIUe8%2BN53GZPIucyFxmh1gEa3aohJxicjHte1bEGw0gtCHogaN7VwOG6rmmiA6mx7kVufq8mZx7T%2FuwuAos%2BAd4JRX4UUEL4N0oU61vun0SkZb0T9iA%2B11IOYxVqrCJyOeiO4JRmdDrZNbgZFnTcRRdmzZpNz6FkWG%2FHpl0Gkb%2BkmViFovyF6V2K52pDR4LNOAsXhhB1KC4BFItMEKWA4o8ehIzdc3QGxuTpP%2FaCNyKNmEwQQRZEvRPIZ5H53l2b05VMV%2Bj1p%2FuI1grsL%2Bg1ZAa%2BTS0Q9i%2BQGaKV5zgQPGQoTjm6fvwJhDLzCzgN3JBjqkAQZzRIwEr1Yg6jwAJJRWd6AQLWTC2kTkYyIHqN1bioMfL49fuVkSGNBFG5jjxlixGzHaLlX0EC5nct4rH7INoebj0ikI0aAygD9Hs0Q0x8IIPW9kVB%2FJ1pYgVCF12GjXSGF5Up%2Bt7erfJyovI50EoCiYc1WGbjY63Akq7SM4e70vaTOKysuHDrQ9%2FojtIBFEyvgV41b07dyiMPfxjbgDZClwgnwJ&X-Amz-Signature=0d099c446c6d696172d0dccf1b22087896c4b95e77995d0d4551327ed99ba14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIF2UISH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2FRXypobUbN87zJnPSzB90yYdBiZk2hU0WXgbxlYO%2BAIhAPuhBcuvGaL9KWue78cjS7%2Fgde07j6K2n5rzfFYtEVXLKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDKpyY0zfgEj%2Fk9rYq3AOmEXTTzaRkMXKbAgxpO4wcEN2wv0mpashR6VWLCGtNxIVzHKE5WejnOIrJmAObRaQboqDae6JAwXTKAyMKTb3eBM9d1IuxMlik6y3BzBzJQXbKoKCmZr4o96x0tMGzK5TPDd34wtcW8LHYeEY867K1nZIKgQ5cPD0vnIRvrrMcf%2B%2Bc6plykct5KhGTaWF%2FMUyizw2SZyUzdSuV9v5Np0eCDBF3ekUxaptfpra%2FhOv2AG9BwBIX5VsaxfGyw1DUZL5BVsSKEw610JNLtPfA4cmbXavuQ2fWGLiFrxM25e0GwIypU6786tSFwrJwmnH5ickOE0tIUe8%2BN53GZPIucyFxmh1gEa3aohJxicjHte1bEGw0gtCHogaN7VwOG6rmmiA6mx7kVufq8mZx7T%2FuwuAos%2BAd4JRX4UUEL4N0oU61vun0SkZb0T9iA%2B11IOYxVqrCJyOeiO4JRmdDrZNbgZFnTcRRdmzZpNz6FkWG%2FHpl0Gkb%2BkmViFovyF6V2K52pDR4LNOAsXhhB1KC4BFItMEKWA4o8ehIzdc3QGxuTpP%2FaCNyKNmEwQQRZEvRPIZ5H53l2b05VMV%2Bj1p%2FuI1grsL%2Bg1ZAa%2BTS0Q9i%2BQGaKV5zgQPGQoTjm6fvwJhDLzCzgN3JBjqkAQZzRIwEr1Yg6jwAJJRWd6AQLWTC2kTkYyIHqN1bioMfL49fuVkSGNBFG5jjxlixGzHaLlX0EC5nct4rH7INoebj0ikI0aAygD9Hs0Q0x8IIPW9kVB%2FJ1pYgVCF12GjXSGF5Up%2Bt7erfJyovI50EoCiYc1WGbjY63Akq7SM4e70vaTOKysuHDrQ9%2FojtIBFEyvgV41b07dyiMPfxjbgDZClwgnwJ&X-Amz-Signature=d2c50bdf6453bd5bcbec3be16b41eb2ed964243fd76f6409c48567cd1705be8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

