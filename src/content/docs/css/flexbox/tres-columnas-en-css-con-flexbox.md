---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UAUDGN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF9hzlk4S9ylSUsHpRGORM5MXo%2FdhFdmrC8uuQmizrRAIhAPoXXoWKWgK2tnanoxzdb0aM6DPrL97F8PNq%2FvQBMr9xKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZmo9gCf7OmI2ngVIq3AOpc2H7cz17zm82VkNcqz3h2gU5hvh0Up2ocV2lAJlMGjubr%2BQoSlLJaJc%2BunnAg4vUEl80G5RFIhvmw7usKQnzCONzF7pHHRvyPqbF%2BSdUKR83mbVDOLryvbS7zEqaKe%2BRyMd5BPUYGk2axn0VrCwGM0QYQACeaU5cyIWk6l4epmroIs%2F%2BjelB46YttYo9mKgI6ZdIwgHhTJnhobfxZGWvUk%2BOJs13b77sKG23hiBU5FpZZoGfyt4B1Bj49UUkIqjj23KU8aIv6SGh5vF9RjgfkEoeIz18i3SVzDIAW33vR7503Vsmm7mEXs%2Bxb4JgJqDlgOI65wI0VdlAHKhh34%2BjfbE6kzbN1L6SAZgad4FFseZUDqSai%2FHTsskqWq6xkwv1%2B0akpXToSiRN3RQmBxLx%2B0hl0JcZipfx9Lqc749VQZPgkvnoNKLK%2FgEovZ1IU%2F%2ByuTHDAefO3K1%2B4Gf8UUhxPTRfeAxsH8E2bkkZm5fPL1HnTeAWKuadE7Fj9qwwhLu1d%2Be8mSN02h%2F3V2hFcYbJCTq1rpyrfUEUhX0WTy1aG%2FBfevQm4KpkUAzEpe4BLx1VMa9THG849B8DSP%2FULbFixqdD%2FDdpb7EfaRMU684SsShfhEau4DlPs9hIEzC50NnJBjqkAfijxxzjaMWPhMsbXfbHpOznTGqGn7r3pDbYZOmGOebzfpUD3mA0099m5BshoQLQe7DhwSGJ%2Bm2Px1cJoUtn9E%2Fw6ItTvjGr1FS%2BaePZdomG%2FkDSycKZPljOiZy2v5YZ87gGF60XayeR6reRClPg5mF4XtTJ%2BHZTi6qOyjzOU1gVBZxtpz9vS3uqcGBMr6JHBkQCKOUUE63IY5PQjOQl35u8yT1j&X-Amz-Signature=47e1048855f69a185fa0a9563d777713c5ebe77408fabdb086e24a676f2031d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2UAUDGN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF9hzlk4S9ylSUsHpRGORM5MXo%2FdhFdmrC8uuQmizrRAIhAPoXXoWKWgK2tnanoxzdb0aM6DPrL97F8PNq%2FvQBMr9xKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZmo9gCf7OmI2ngVIq3AOpc2H7cz17zm82VkNcqz3h2gU5hvh0Up2ocV2lAJlMGjubr%2BQoSlLJaJc%2BunnAg4vUEl80G5RFIhvmw7usKQnzCONzF7pHHRvyPqbF%2BSdUKR83mbVDOLryvbS7zEqaKe%2BRyMd5BPUYGk2axn0VrCwGM0QYQACeaU5cyIWk6l4epmroIs%2F%2BjelB46YttYo9mKgI6ZdIwgHhTJnhobfxZGWvUk%2BOJs13b77sKG23hiBU5FpZZoGfyt4B1Bj49UUkIqjj23KU8aIv6SGh5vF9RjgfkEoeIz18i3SVzDIAW33vR7503Vsmm7mEXs%2Bxb4JgJqDlgOI65wI0VdlAHKhh34%2BjfbE6kzbN1L6SAZgad4FFseZUDqSai%2FHTsskqWq6xkwv1%2B0akpXToSiRN3RQmBxLx%2B0hl0JcZipfx9Lqc749VQZPgkvnoNKLK%2FgEovZ1IU%2F%2ByuTHDAefO3K1%2B4Gf8UUhxPTRfeAxsH8E2bkkZm5fPL1HnTeAWKuadE7Fj9qwwhLu1d%2Be8mSN02h%2F3V2hFcYbJCTq1rpyrfUEUhX0WTy1aG%2FBfevQm4KpkUAzEpe4BLx1VMa9THG849B8DSP%2FULbFixqdD%2FDdpb7EfaRMU684SsShfhEau4DlPs9hIEzC50NnJBjqkAfijxxzjaMWPhMsbXfbHpOznTGqGn7r3pDbYZOmGOebzfpUD3mA0099m5BshoQLQe7DhwSGJ%2Bm2Px1cJoUtn9E%2Fw6ItTvjGr1FS%2BaePZdomG%2FkDSycKZPljOiZy2v5YZ87gGF60XayeR6reRClPg5mF4XtTJ%2BHZTi6qOyjzOU1gVBZxtpz9vS3uqcGBMr6JHBkQCKOUUE63IY5PQjOQl35u8yT1j&X-Amz-Signature=eab358faa3dd332f4090488b9d713ce9c8981b20f372876ecb04666c4c930db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

