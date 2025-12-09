---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTX3CUCN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTgqfgKX9woGBj9C1%2BKcAlfC6PMsK5Qz44B9GhQpqLFAiEA8rHCQFJg66KnyHN6fQar4fHFnps5skDCdMmHKsShPl4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrOjtFTjy51%2FTz0ryrcA24yJKeKvhL49r33ZnxjSh9qH%2FHCROI9q%2FwSl3XDZ2zMk7qEh4JAtMm7s2UaLfGxO3JxdE2Orh7JyKR0rJvN9IzfelXc%2FyEf6a5Lg7jduTQ0p92ckDx%2FXY71hHU6XWus5gjuYMURvdHjMT9RhH%2FinR%2FgApCWeInEhQ1NjwJDXHiO3lggbir9jgeKOFFAKDVURBXoD8U%2FeYaoOGdElYLwakqC%2BcOATve3wBLv2CEuI1oyRhE6P8ug1RuBL3b2JVfDgmJGRLZPIxvNp8TFwXe2V4CbeHxQ%2BAdP5KxSC46q0w%2FRfwnrdW9c4fdXjNA5O2XKAm0R4kCT4A2sr2qGxCwGO%2Fw7qSG0mhxSzIL%2FkaN3Uq2Cdk7NCNqmxZd2qWrvFAbEFJSF%2FHZalOtNeFtuaVXK02FIZfx4d6MzsXh7SMH2f7soMD6Z68mZDoDR7i%2FHtMgnfB%2Bc%2BoiXqMNPbnGdJ3olXbVsYJjzb09rZLO8ni8iNpuQvtR4dSKB5P9%2BhYiaJla9B2wm%2BioltlHIdZ2Eu1tdMF3ksPM1AcX151OUtVPuu5GRdSH%2BzKNpS7CbO4Hif8qRilSEoGirmXIp80ioMCz42p%2Feb3YhwKw9XIBB0JNK5lr61244n8Ru6kEMF%2F82ML%2Fl3skGOqUBadApgIg0HYOMvNWx%2B4hZywF5X9%2BKMTZbAxwH3313EPsJNYc8IUN8kP5jrtHdZpg9%2BW5IjKE0wAn0q7kh5LSODLVsXSX0iVlGyG3QOE3eVqDiGnbPwOejGN6EpHKiMHeudXE%2F%2BJZTJmG2vuWUfF0ec9tzc%2BwOC1KX3fNjgYo%2FZyn8CFOJYD7XKiryhPCrhF7bDnHWeICM8F2Nn5M3RItf65%2F%2BmQje&X-Amz-Signature=ecddd6d296b24c6b404575c41fe88f2bd707bd77ce62f586f664fb168d9e904a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTX3CUCN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTgqfgKX9woGBj9C1%2BKcAlfC6PMsK5Qz44B9GhQpqLFAiEA8rHCQFJg66KnyHN6fQar4fHFnps5skDCdMmHKsShPl4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrOjtFTjy51%2FTz0ryrcA24yJKeKvhL49r33ZnxjSh9qH%2FHCROI9q%2FwSl3XDZ2zMk7qEh4JAtMm7s2UaLfGxO3JxdE2Orh7JyKR0rJvN9IzfelXc%2FyEf6a5Lg7jduTQ0p92ckDx%2FXY71hHU6XWus5gjuYMURvdHjMT9RhH%2FinR%2FgApCWeInEhQ1NjwJDXHiO3lggbir9jgeKOFFAKDVURBXoD8U%2FeYaoOGdElYLwakqC%2BcOATve3wBLv2CEuI1oyRhE6P8ug1RuBL3b2JVfDgmJGRLZPIxvNp8TFwXe2V4CbeHxQ%2BAdP5KxSC46q0w%2FRfwnrdW9c4fdXjNA5O2XKAm0R4kCT4A2sr2qGxCwGO%2Fw7qSG0mhxSzIL%2FkaN3Uq2Cdk7NCNqmxZd2qWrvFAbEFJSF%2FHZalOtNeFtuaVXK02FIZfx4d6MzsXh7SMH2f7soMD6Z68mZDoDR7i%2FHtMgnfB%2Bc%2BoiXqMNPbnGdJ3olXbVsYJjzb09rZLO8ni8iNpuQvtR4dSKB5P9%2BhYiaJla9B2wm%2BioltlHIdZ2Eu1tdMF3ksPM1AcX151OUtVPuu5GRdSH%2BzKNpS7CbO4Hif8qRilSEoGirmXIp80ioMCz42p%2Feb3YhwKw9XIBB0JNK5lr61244n8Ru6kEMF%2F82ML%2Fl3skGOqUBadApgIg0HYOMvNWx%2B4hZywF5X9%2BKMTZbAxwH3313EPsJNYc8IUN8kP5jrtHdZpg9%2BW5IjKE0wAn0q7kh5LSODLVsXSX0iVlGyG3QOE3eVqDiGnbPwOejGN6EpHKiMHeudXE%2F%2BJZTJmG2vuWUfF0ec9tzc%2BwOC1KX3fNjgYo%2FZyn8CFOJYD7XKiryhPCrhF7bDnHWeICM8F2Nn5M3RItf65%2F%2BmQje&X-Amz-Signature=f0f8eaf588dc86d3e04612c32f9c0ea2a3aa8f8ef82249feee1cb8136edb1289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

