---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLZLTBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXydo%2BvSUEFWi%2BXs7xl7It3Ebl8h3i3TqqTO%2BwviiMDQIgRzdoLDAut6TYEMxRyGvMlt7%2BmIHEcRUDd1dKvI3DsqkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbHs2qVHcAvvLQ4TircAwO6KVM1dnuwnPdtmtwQyYQUGg%2BsPJuyArO%2BjJI32y3XQU4yfpqB%2BLqcuA3RnjUxzMksy6bFcrWEaRzyIy%2FePTSRJ0SsjM6S6%2F6X4YybIgKh%2FvXMXYnjo3woa3iDpUjvX8r1FkdDlHzzp0y3OT1Pu9RdKoWLWO4Hbw6qf5XVC%2BBRdZtlzFAjua3bzhAxty0BXSOboKB72tedjyvjKxVFH97sfdgKwByI%2BsTmdDHYLZA8DuprjgOCbrtNIEwpJOY%2Fwdc5bS5ir9ULZ%2FgsvkAQGfDiybnQhmJqmc18n%2F0U64fLrDzNWyNH1O97ujjqFV7NX1MWlxrj8eYJh%2BEPhBFAs7JgOu5Tml%2BC1G3fex2G5TZxTAAApGZrx1koJJ1aJBZ5tQ4mjIZ%2BSRLn8Mxde0zxFnKoiIY10%2F9DIaaP7PyV%2B3e1ILN%2FCS%2FcBNWGI%2FLmFPdU9i7vGZxFhxr9sNGrKG23PSfIc5c%2FGQx5h6S%2FYGjWxRJCbNd%2BPJP1fdTXbiurS5BVp3zEbpboFM1YvfF15JJ94CG7yet1QAjuDQqU9JJD2HCmlyav6xR5Qc8F8L2BZx6tuw4VmkcdPXcbiq2DsjictNrL%2F392BfvIo0OIzN%2B%2B4E15qj2A8K5tZbbAABOcMMmP28kGOqUBpEwFbMPpreRB6CLzGOoFgjeckjjM4Oy6af8m0swnR7mYHDchDljGPwBafzwLPBlW0tPINcSOoKlM4sdCAIXkrDO8MoAuB1SR%2B70LltfKgs83vqhSS3W1CcmDpyaw7p6yHXiRz9YzI%2B2d2jnJ4f9aVk0h4YUDdOpbtRqPW9GKajPjR%2FetY7XjnZFZLnLoKODzhCqUQW0RUs0fwvu5KG838Sq3VuBz&X-Amz-Signature=12b53dc6a559258a2fa0d4a12f6917186a797751a24b7a15246246a3922b6d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXLZLTBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXydo%2BvSUEFWi%2BXs7xl7It3Ebl8h3i3TqqTO%2BwviiMDQIgRzdoLDAut6TYEMxRyGvMlt7%2BmIHEcRUDd1dKvI3DsqkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbHs2qVHcAvvLQ4TircAwO6KVM1dnuwnPdtmtwQyYQUGg%2BsPJuyArO%2BjJI32y3XQU4yfpqB%2BLqcuA3RnjUxzMksy6bFcrWEaRzyIy%2FePTSRJ0SsjM6S6%2F6X4YybIgKh%2FvXMXYnjo3woa3iDpUjvX8r1FkdDlHzzp0y3OT1Pu9RdKoWLWO4Hbw6qf5XVC%2BBRdZtlzFAjua3bzhAxty0BXSOboKB72tedjyvjKxVFH97sfdgKwByI%2BsTmdDHYLZA8DuprjgOCbrtNIEwpJOY%2Fwdc5bS5ir9ULZ%2FgsvkAQGfDiybnQhmJqmc18n%2F0U64fLrDzNWyNH1O97ujjqFV7NX1MWlxrj8eYJh%2BEPhBFAs7JgOu5Tml%2BC1G3fex2G5TZxTAAApGZrx1koJJ1aJBZ5tQ4mjIZ%2BSRLn8Mxde0zxFnKoiIY10%2F9DIaaP7PyV%2B3e1ILN%2FCS%2FcBNWGI%2FLmFPdU9i7vGZxFhxr9sNGrKG23PSfIc5c%2FGQx5h6S%2FYGjWxRJCbNd%2BPJP1fdTXbiurS5BVp3zEbpboFM1YvfF15JJ94CG7yet1QAjuDQqU9JJD2HCmlyav6xR5Qc8F8L2BZx6tuw4VmkcdPXcbiq2DsjictNrL%2F392BfvIo0OIzN%2B%2B4E15qj2A8K5tZbbAABOcMMmP28kGOqUBpEwFbMPpreRB6CLzGOoFgjeckjjM4Oy6af8m0swnR7mYHDchDljGPwBafzwLPBlW0tPINcSOoKlM4sdCAIXkrDO8MoAuB1SR%2B70LltfKgs83vqhSS3W1CcmDpyaw7p6yHXiRz9YzI%2B2d2jnJ4f9aVk0h4YUDdOpbtRqPW9GKajPjR%2FetY7XjnZFZLnLoKODzhCqUQW0RUs0fwvu5KG838Sq3VuBz&X-Amz-Signature=e7943d9ab7f32424cae4413376f98b8c84f84b536c8341ee0521b2f8922ea042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

