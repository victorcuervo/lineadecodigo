---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNNOU7MF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGR0Xrij%2Bk9o%2Fmrxal8Sj8zj6KfQuYJT6teEIWCHpffgIhAPVsEFezkeb4iosEAbbwymUC42089x7oFAmieOMTf9mkKv8DCDoQABoMNjM3NDIzMTgzODA1IgyPF3DrIYWtn3RB93gq3AM%2FBIQqlucy1MZSLsYPMSSu9MGJ6fi8KErUWR81fOFfwikVE4CGovQiahutDnPdvufEUPX9V%2BY9yBZ%2BkwcWmNTEWLhpCS31enHEBb7FXryhh%2BQvSUxRb3xRXuOkn19hQmUxb0rhLpQVGEcNKvAPvquH3Y2gmOzownd7iJddlHKEo5uj3L7MoXbiGnVvwpT8qufXglEkYseSF%2B9tZ3CIq9otd3qXgauUZCUaQ0Qhxte3yfhsN3aj162svIc4V%2F9Rjna9O5sNklL6M1wX25WC72pv00kMMfca5ISxsbS21gF0rqfGgQ9LYsUomhMG0xz4S0I%2F2%2Bcr6SBGyItYGZvzH%2FGBIOI9VYphOl0tWptuRzMHaCT5E5kHf7k8MhAtGGq8Jk68Gm28zerm%2FrMHY9y99jaAxq5fhG3X0QgsTt55jR7SHULDAiBSHpZzeHO7QV1RXi2MWgbD9AD2kG2ZHaHmRq1Y6wlIXo8POlI7lZrbBqP69ALqLAq%2B2DMZhuEHCcVWJ72cHR%2FY6ht1tCxTO%2BIFmPMdihGldcLYD1tatwbBsTfKyhx6zp6iXhd%2BMM0%2BOaAzae4%2BdXZKBA2Fxtz4Ux5ImU23%2BR4SNJ0ZJJDa8T%2FGBNq4KzdbtSzXB2Kj1Gxd3DCstcPJBjqkAURwaSxtzRDUKu%2BRDXYUS8Y50jzFhivdh04KwRXJGQ%2FF6jyw7X8P3laEVLQiM6aApYAOwnHPg%2BxyASiqpg3%2B3xjYeinOYyo1zAcJUMazVcHnd1wNT7UnkadfsTYBF363oPNIceb5SJiWBbGL1YMoBmQT3M1klpvju6mZdCFdkRkfjc0b514%2F32eDPLSn%2BLRRGG7lr47VumQHpadmDMsenazXaEdy&X-Amz-Signature=48b52a2874085d9c4da9bb89e9a0cd19c63c34f477bf65601b647f267ebd63d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNNOU7MF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDGR0Xrij%2Bk9o%2Fmrxal8Sj8zj6KfQuYJT6teEIWCHpffgIhAPVsEFezkeb4iosEAbbwymUC42089x7oFAmieOMTf9mkKv8DCDoQABoMNjM3NDIzMTgzODA1IgyPF3DrIYWtn3RB93gq3AM%2FBIQqlucy1MZSLsYPMSSu9MGJ6fi8KErUWR81fOFfwikVE4CGovQiahutDnPdvufEUPX9V%2BY9yBZ%2BkwcWmNTEWLhpCS31enHEBb7FXryhh%2BQvSUxRb3xRXuOkn19hQmUxb0rhLpQVGEcNKvAPvquH3Y2gmOzownd7iJddlHKEo5uj3L7MoXbiGnVvwpT8qufXglEkYseSF%2B9tZ3CIq9otd3qXgauUZCUaQ0Qhxte3yfhsN3aj162svIc4V%2F9Rjna9O5sNklL6M1wX25WC72pv00kMMfca5ISxsbS21gF0rqfGgQ9LYsUomhMG0xz4S0I%2F2%2Bcr6SBGyItYGZvzH%2FGBIOI9VYphOl0tWptuRzMHaCT5E5kHf7k8MhAtGGq8Jk68Gm28zerm%2FrMHY9y99jaAxq5fhG3X0QgsTt55jR7SHULDAiBSHpZzeHO7QV1RXi2MWgbD9AD2kG2ZHaHmRq1Y6wlIXo8POlI7lZrbBqP69ALqLAq%2B2DMZhuEHCcVWJ72cHR%2FY6ht1tCxTO%2BIFmPMdihGldcLYD1tatwbBsTfKyhx6zp6iXhd%2BMM0%2BOaAzae4%2BdXZKBA2Fxtz4Ux5ImU23%2BR4SNJ0ZJJDa8T%2FGBNq4KzdbtSzXB2Kj1Gxd3DCstcPJBjqkAURwaSxtzRDUKu%2BRDXYUS8Y50jzFhivdh04KwRXJGQ%2FF6jyw7X8P3laEVLQiM6aApYAOwnHPg%2BxyASiqpg3%2B3xjYeinOYyo1zAcJUMazVcHnd1wNT7UnkadfsTYBF363oPNIceb5SJiWBbGL1YMoBmQT3M1klpvju6mZdCFdkRkfjc0b514%2F32eDPLSn%2BLRRGG7lr47VumQHpadmDMsenazXaEdy&X-Amz-Signature=778fc3d05704148849851cbde9ed9a1ddd91687af634c4286c43d21b1a4b3240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

