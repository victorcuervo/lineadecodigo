---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKKPMMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCiEHkqyLkIG%2BdtCf6kGlKUZbAetnSXfKiPHfZ5YIiu%2FwIhAP%2F4O4AtjfYOhsfOV0HJf6%2FiVplsmFoSp58fFcjp3S7RKv8DCEQQABoMNjM3NDIzMTgzODA1IgxCcBrdpfsPL5mr4ZYq3ANw8G33g1Kl%2BA%2FqFH7sp3uD7Q7ik1yMB8cCDS%2FBEDn7aPrfndL0vbb9R7EtkF%2BL5dItjvQ2y4%2BnsVCJO3BKB9bTgBLHYZ%2B2FbQB0Yi2aZ8rOvJGp6VhcPx3MjG7Os7pASTlEgssXpLyav27xfNMunK5rMKEIXfd5aCyUOXRcVMjLgMBisdCysTAPnqzPoZPt3eNslIYCbc8MR5twMBd6WnoDsiVPnbupkl%2BEMDDbshGGMkTJFADyo358xa3l6sqjQgC%2BRrYHcypLfVOX%2BlD97sXnb%2B28G3BCDNXunnGRPuw%2FBSBmQ%2B6r29gfAZPuLBBjKhxMYSS4WeotPwXsjhHbq2pxpUxOjG1vEUWq6AGXDBhMsQ5zuNR6mtA6piu%2B2zxAYR6TMjFRNi47FGG5LViRzSiM1WbhjjCCmEVLpsiWNVxa31iq%2BGj4NqM18VJkZ76VmE3d9g%2FimTiFp9wEov0pgn06nZDlR6yxW3koAS6HKog4d5DPP5paMkZpLcQLVKNRnEjRdFgTGXsy84%2Bf67CkNtDDeWXXYjo%2BCpX61fKFKCFraGky%2B7RoEMpaDSAyCy6Oj%2FByRNPqZgUaKWY53NYxwLpcZfNTikP4o1DREdI5KQH95RP3NrHwzTf%2F3JHhDDHysXJBjqkAcY5dxT6J5IQAaJGSjDiQqMurNc2RTF%2FdzpRGZRt6e7AZFqh4BGK9fJL4HjT%2BwiWsK3L%2FYmzLywMXbvPUD08kUnJBYM1sg4ZzkCkRWGIgjkQbZxQQh%2B76KTZDIPvThuRv2uZSaFlS%2F35S4d13I21aleI2BLgs1I5XsGAICJhnxiJNJKVJR4C0k0og5htoeVUnJSvUGFYXouU3xoP8N%2FISmtReDgm&X-Amz-Signature=7d570b9c6bd445b82331833d42a00717f93c87beccf76fdf28b5e07b81f4221f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKKPMMF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCiEHkqyLkIG%2BdtCf6kGlKUZbAetnSXfKiPHfZ5YIiu%2FwIhAP%2F4O4AtjfYOhsfOV0HJf6%2FiVplsmFoSp58fFcjp3S7RKv8DCEQQABoMNjM3NDIzMTgzODA1IgxCcBrdpfsPL5mr4ZYq3ANw8G33g1Kl%2BA%2FqFH7sp3uD7Q7ik1yMB8cCDS%2FBEDn7aPrfndL0vbb9R7EtkF%2BL5dItjvQ2y4%2BnsVCJO3BKB9bTgBLHYZ%2B2FbQB0Yi2aZ8rOvJGp6VhcPx3MjG7Os7pASTlEgssXpLyav27xfNMunK5rMKEIXfd5aCyUOXRcVMjLgMBisdCysTAPnqzPoZPt3eNslIYCbc8MR5twMBd6WnoDsiVPnbupkl%2BEMDDbshGGMkTJFADyo358xa3l6sqjQgC%2BRrYHcypLfVOX%2BlD97sXnb%2B28G3BCDNXunnGRPuw%2FBSBmQ%2B6r29gfAZPuLBBjKhxMYSS4WeotPwXsjhHbq2pxpUxOjG1vEUWq6AGXDBhMsQ5zuNR6mtA6piu%2B2zxAYR6TMjFRNi47FGG5LViRzSiM1WbhjjCCmEVLpsiWNVxa31iq%2BGj4NqM18VJkZ76VmE3d9g%2FimTiFp9wEov0pgn06nZDlR6yxW3koAS6HKog4d5DPP5paMkZpLcQLVKNRnEjRdFgTGXsy84%2Bf67CkNtDDeWXXYjo%2BCpX61fKFKCFraGky%2B7RoEMpaDSAyCy6Oj%2FByRNPqZgUaKWY53NYxwLpcZfNTikP4o1DREdI5KQH95RP3NrHwzTf%2F3JHhDDHysXJBjqkAcY5dxT6J5IQAaJGSjDiQqMurNc2RTF%2FdzpRGZRt6e7AZFqh4BGK9fJL4HjT%2BwiWsK3L%2FYmzLywMXbvPUD08kUnJBYM1sg4ZzkCkRWGIgjkQbZxQQh%2B76KTZDIPvThuRv2uZSaFlS%2F35S4d13I21aleI2BLgs1I5XsGAICJhnxiJNJKVJR4C0k0og5htoeVUnJSvUGFYXouU3xoP8N%2FISmtReDgm&X-Amz-Signature=d3d45137bd521999d4b4b926fe6f89d0eac6bd7823259ed845bb3c0f47777c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

