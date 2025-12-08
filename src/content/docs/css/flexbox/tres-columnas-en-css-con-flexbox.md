---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWJ2Y5K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKmdrrKnHbIPdp7vjwwEMj9UgOVEscV82AcUsMk7JmrAiEAk39nvem2iBBejt5HH1VIs7ho%2Bd38nUs4J1by6jljdRkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BDCuiCKxCCXVpX0yrcA2scF%2BeauY7GqYwKsiTGftppP2HRLfhEgF3zfK7IlydPuPcH9cTfxa8SjVSEfXxbv4czbPkYgb5sluNqu2IYCVMOVDrZroDk2Z7WsMjXxfonN4HoS4Ha4%2FXEeh7p89lOcPCniCluzdCRVsiyxh%2FW43piIa%2FEopJCkJ%2FnsguITEgY5rmPggf61oz5dmmpk3%2FwVefAj5MWRBni5fg4zjCrYdydGKk5AA%2FgM5ugyIfi5ZQ9uFAUk%2Bq7%2F72enCPcvvhZjZXgg9OS2Dxlbeu9JJ%2BgJ28BvAwNXxpHHDJT4CBKqBmZpz2NhnjUYnQeVW0SRr%2BcO9JzP5thfuuuvNbNgLh%2Fu%2FEU5ZFt%2FMgWVeWiCnPIuZMav7VButFo%2FG%2F02xjaWNR6ut66IrUA2Lgx4hd4peMNY9Tjc00R%2Fco7SsTzO1qnIndiGi37LvRL%2F2j9XJL%2FG1PdW5dAEnMmS96%2FIp0VIG2q5LVKCp6%2BRH4zSbobsspZ1%2FjTIAdgUpj6SoGiVQMLS0DVh6rCglnnQGbFJTisU0OWKDfpKRRw3dzdo1%2F2l%2BmynK73j1eIWyOAx92vekbdjC4q%2B1bnOMVPN5MY3tbjYm59JWBTbDswSKd7AJY3%2BSHCxVSisY8rjcvra17krPuIMODQ2MkGOqUBXQYV4GcWV94icKUu9yuCiOBzSPO3oIkjjhz1AXq9O3aK0ysPHEnJ5kn9L4GYPc94QlBEqQ1tFiV1Q1FCe0Ihxr9s%2BDnCguHdXETaxjkIGXs4WKurPAQS3CbvftMmO%2FDJQS%2BYteYKgv%2BNbpBnJuK13HD%2FyiltEUi5sjlP4KDdjoQyhWxCNb8KuXvXVol3kHHfFqvqa85pCJaHORaGnyMpBCDE6R9%2B&X-Amz-Signature=aa9b4c40bb23548509532a6be57ce0e5b4773d3222b3ac66a3b51016c81e7138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWJ2Y5K%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T020124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKmdrrKnHbIPdp7vjwwEMj9UgOVEscV82AcUsMk7JmrAiEAk39nvem2iBBejt5HH1VIs7ho%2Bd38nUs4J1by6jljdRkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BDCuiCKxCCXVpX0yrcA2scF%2BeauY7GqYwKsiTGftppP2HRLfhEgF3zfK7IlydPuPcH9cTfxa8SjVSEfXxbv4czbPkYgb5sluNqu2IYCVMOVDrZroDk2Z7WsMjXxfonN4HoS4Ha4%2FXEeh7p89lOcPCniCluzdCRVsiyxh%2FW43piIa%2FEopJCkJ%2FnsguITEgY5rmPggf61oz5dmmpk3%2FwVefAj5MWRBni5fg4zjCrYdydGKk5AA%2FgM5ugyIfi5ZQ9uFAUk%2Bq7%2F72enCPcvvhZjZXgg9OS2Dxlbeu9JJ%2BgJ28BvAwNXxpHHDJT4CBKqBmZpz2NhnjUYnQeVW0SRr%2BcO9JzP5thfuuuvNbNgLh%2Fu%2FEU5ZFt%2FMgWVeWiCnPIuZMav7VButFo%2FG%2F02xjaWNR6ut66IrUA2Lgx4hd4peMNY9Tjc00R%2Fco7SsTzO1qnIndiGi37LvRL%2F2j9XJL%2FG1PdW5dAEnMmS96%2FIp0VIG2q5LVKCp6%2BRH4zSbobsspZ1%2FjTIAdgUpj6SoGiVQMLS0DVh6rCglnnQGbFJTisU0OWKDfpKRRw3dzdo1%2F2l%2BmynK73j1eIWyOAx92vekbdjC4q%2B1bnOMVPN5MY3tbjYm59JWBTbDswSKd7AJY3%2BSHCxVSisY8rjcvra17krPuIMODQ2MkGOqUBXQYV4GcWV94icKUu9yuCiOBzSPO3oIkjjhz1AXq9O3aK0ysPHEnJ5kn9L4GYPc94QlBEqQ1tFiV1Q1FCe0Ihxr9s%2BDnCguHdXETaxjkIGXs4WKurPAQS3CbvftMmO%2FDJQS%2BYteYKgv%2BNbpBnJuK13HD%2FyiltEUi5sjlP4KDdjoQyhWxCNb8KuXvXVol3kHHfFqvqa85pCJaHORaGnyMpBCDE6R9%2B&X-Amz-Signature=ca1d330b83bd204e11b84d4d020fb240b7b56f236c6a4d641b80dad129c69993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

