---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBI3454%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMB9lP%2B8%2FLIr%2BTrcOc5NxuUXm1Wa4yl95BkD6DfEx0FgIhAIjZygFHdUbm%2Fm3whSL3%2Fd7s4I%2FvlZMywzKzThlV1hXpKv8DCDQQABoMNjM3NDIzMTgzODA1IgySQkoaDjuEkbkCwfUq3AMiEg1jDiDsKPrsDlRuVqmy6xgl434FoduoiKZ%2F35IPRT2b9vm3WjhI4ZxiVrUdxOKTcXAlcaeM05OVvPHVQpvWyBWA3Zb2nSU5YeprPTxT4MrDQgoM9KT8IrpHD1sUNl8gppvMfBl3IbkMM7nSgGrlpkhSfbtOpgUf7Z7grb9a42ep4x%2F2iV7m%2Fg8aqUfltiAcQHtVZGNMaDCPK2hmD16HrS8ljGU3ApQnXp%2BfUncajqpseu%2BA7xg2WS5Sy4XrIzlyRdOcPQcqSAAkadPMlqWhJVtTRbRyWTvDLIvwOLKCIZrw6UqbOh%2F0wHNYPX3FVYQ76meh0hEPyXHy6J0AhYmDUxVSRaN0tY5qDfReLK0JW1V9zN9IrPwc1pFmSrdRH9zjWFt08HnIWdMyhFzmWob3NBgkrwr7gD%2Bu4jaQM%2F0TcdHZ%2BQbI5tSVtGvEepUaC2YAehAuBgJk4K5uG48l7F6WqTJXCbm6bVjdD%2BWRB5nDhIia95QazFH8KucTeNt%2FamvUpyLx5J8khooLC4u1xJfcLZ6e8czqZm09%2FlPtwV4OIdi2GXMX0%2BOlkcOW%2FpikHC6tLl5%2ByYLhggGq9YWwz5hPCrtJAQicv%2FnNwxfhQjGD1XPWq9IvwLI29G7J2jDMkcLJBjqkAaLDT%2F7mDSFxN2z%2B1Ijorciefe5fKv0KTQ%2Bl8i8Nv2CaTM8sD6Sp1GcTOWghI%2B6HbnaPSbV%2Bn1%2BVqubEs7HvmFpFM8nGPjwonn13Nst%2BJdL8dwGTtTWEILagf01MwuwljPbbcTNT%2B5vhpKQiaVt%2BiJDV7h%2FkFYC5On8rFMxuS6ltr05qoJiMz0Tf7PFAUokTJWf2Rpprbd0bGFdP4vzqUnk9d%2F5n&X-Amz-Signature=a0bf04869a33ca0d08d5a102c705ae389cd410f00ae561c7e6bd2fbe7bf79d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBI3454%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDMB9lP%2B8%2FLIr%2BTrcOc5NxuUXm1Wa4yl95BkD6DfEx0FgIhAIjZygFHdUbm%2Fm3whSL3%2Fd7s4I%2FvlZMywzKzThlV1hXpKv8DCDQQABoMNjM3NDIzMTgzODA1IgySQkoaDjuEkbkCwfUq3AMiEg1jDiDsKPrsDlRuVqmy6xgl434FoduoiKZ%2F35IPRT2b9vm3WjhI4ZxiVrUdxOKTcXAlcaeM05OVvPHVQpvWyBWA3Zb2nSU5YeprPTxT4MrDQgoM9KT8IrpHD1sUNl8gppvMfBl3IbkMM7nSgGrlpkhSfbtOpgUf7Z7grb9a42ep4x%2F2iV7m%2Fg8aqUfltiAcQHtVZGNMaDCPK2hmD16HrS8ljGU3ApQnXp%2BfUncajqpseu%2BA7xg2WS5Sy4XrIzlyRdOcPQcqSAAkadPMlqWhJVtTRbRyWTvDLIvwOLKCIZrw6UqbOh%2F0wHNYPX3FVYQ76meh0hEPyXHy6J0AhYmDUxVSRaN0tY5qDfReLK0JW1V9zN9IrPwc1pFmSrdRH9zjWFt08HnIWdMyhFzmWob3NBgkrwr7gD%2Bu4jaQM%2F0TcdHZ%2BQbI5tSVtGvEepUaC2YAehAuBgJk4K5uG48l7F6WqTJXCbm6bVjdD%2BWRB5nDhIia95QazFH8KucTeNt%2FamvUpyLx5J8khooLC4u1xJfcLZ6e8czqZm09%2FlPtwV4OIdi2GXMX0%2BOlkcOW%2FpikHC6tLl5%2ByYLhggGq9YWwz5hPCrtJAQicv%2FnNwxfhQjGD1XPWq9IvwLI29G7J2jDMkcLJBjqkAaLDT%2F7mDSFxN2z%2B1Ijorciefe5fKv0KTQ%2Bl8i8Nv2CaTM8sD6Sp1GcTOWghI%2B6HbnaPSbV%2Bn1%2BVqubEs7HvmFpFM8nGPjwonn13Nst%2BJdL8dwGTtTWEILagf01MwuwljPbbcTNT%2B5vhpKQiaVt%2BiJDV7h%2FkFYC5On8rFMxuS6ltr05qoJiMz0Tf7PFAUokTJWf2Rpprbd0bGFdP4vzqUnk9d%2F5n&X-Amz-Signature=412b00269bc08946147ba07db6d180537aa83be54629270f76a685af460b0f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

