---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQP7UAR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF2cbtVxY6KP4ueUmWqILf89SBtmJ%2F7NzEpLk%2FmWJ4FgIgepHs952JdEp3O8SSw%2BnMyNQGzvfLNeXIRGueN485OQMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHftn%2BsloR2MdbyaiCrcA%2BlU4vTM3NaGNqfxr%2Fw5b4D6S4aGioEE9DzXvdZyxW1SE9pbXXeN4GXa6nFAJ2Cjah2sgsadf49NQmd2sYRWe7AeuZsWqOHsmPG2S7FVVr%2ByruTZDe%2BU8kI%2BxdKEqxP%2F1wjjJbDvp%2BGSWUynwBU%2BL4GFDiD%2BevIF86nT%2FOBBMCXmu3tB1kIsbQT3r2AxenD%2FYRR2M7LDqa9MUKNyKTFsmxUqdhJc2K1RKPEcwu6on4qCKF7NtGurMk2698oryXraHi8ADdDgKA63SMvoJYH5AuH9SQilHlzGXIoFEvLR%2FOzpfNAAlzgd59JZZNR6iOiwpWlty6OHaoqhBb%2BySkDcUHZG%2B7LNgowdH7wZOPcRTi2kjwDVthXkwPbLeQuArVNSmuZcZ7i6qGQ9yWEYpg%2Bup8cH6zc6EPioA%2FXbBQ6XCADFJuwXToV5ClOp6lnMre3ITsONtb%2BMEFpVgQS4GVOicCFHbJbtL3G9LwinU54oOfB0a3hlif6u6eUM0ps5OrvgCzc0utRUk1UsIjbvBRzYADDvvCmj4gE9jKcsPte4kbmdplNHtGaEGYM4dZRfj0MC%2Fk5MFHhjaXX2c5gC1IJyK0RTyiIOB48dx7XIyEY6Ws%2FElGVtRCyflJtgKQIiMNWm0MkGOqUBQLK%2Fj%2F7qz%2BLyQrLh%2B1NFjklAqQ6bgJNFBjftRzWDm20mmD2QFCYLj7nmJBjjdbpnmAOb1IXza9iSrj9uj0x%2Fk%2FuZMky%2FdrN884R98yI%2BRjR4pkLObHqzf2QeA%2F95NJEqwAgkW3ADWWy%2Fwn92%2F4r%2Fy8x1LxZTeK1Q8NZNVcDgsqQehr21qx09il9pdD1se%2FtU566QdyIZqOd2DcBKlZHoKItVmOZx&X-Amz-Signature=ac60a1e8dafff8e5c4100e190e7bcfc5b902518a907916fb1a08e75659e2c13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQP7UAR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF2cbtVxY6KP4ueUmWqILf89SBtmJ%2F7NzEpLk%2FmWJ4FgIgepHs952JdEp3O8SSw%2BnMyNQGzvfLNeXIRGueN485OQMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHftn%2BsloR2MdbyaiCrcA%2BlU4vTM3NaGNqfxr%2Fw5b4D6S4aGioEE9DzXvdZyxW1SE9pbXXeN4GXa6nFAJ2Cjah2sgsadf49NQmd2sYRWe7AeuZsWqOHsmPG2S7FVVr%2ByruTZDe%2BU8kI%2BxdKEqxP%2F1wjjJbDvp%2BGSWUynwBU%2BL4GFDiD%2BevIF86nT%2FOBBMCXmu3tB1kIsbQT3r2AxenD%2FYRR2M7LDqa9MUKNyKTFsmxUqdhJc2K1RKPEcwu6on4qCKF7NtGurMk2698oryXraHi8ADdDgKA63SMvoJYH5AuH9SQilHlzGXIoFEvLR%2FOzpfNAAlzgd59JZZNR6iOiwpWlty6OHaoqhBb%2BySkDcUHZG%2B7LNgowdH7wZOPcRTi2kjwDVthXkwPbLeQuArVNSmuZcZ7i6qGQ9yWEYpg%2Bup8cH6zc6EPioA%2FXbBQ6XCADFJuwXToV5ClOp6lnMre3ITsONtb%2BMEFpVgQS4GVOicCFHbJbtL3G9LwinU54oOfB0a3hlif6u6eUM0ps5OrvgCzc0utRUk1UsIjbvBRzYADDvvCmj4gE9jKcsPte4kbmdplNHtGaEGYM4dZRfj0MC%2Fk5MFHhjaXX2c5gC1IJyK0RTyiIOB48dx7XIyEY6Ws%2FElGVtRCyflJtgKQIiMNWm0MkGOqUBQLK%2Fj%2F7qz%2BLyQrLh%2B1NFjklAqQ6bgJNFBjftRzWDm20mmD2QFCYLj7nmJBjjdbpnmAOb1IXza9iSrj9uj0x%2Fk%2FuZMky%2FdrN884R98yI%2BRjR4pkLObHqzf2QeA%2F95NJEqwAgkW3ADWWy%2Fwn92%2F4r%2Fy8x1LxZTeK1Q8NZNVcDgsqQehr21qx09il9pdD1se%2FtU566QdyIZqOd2DcBKlZHoKItVmOZx&X-Amz-Signature=a5b47b4d7a31178530a4da945d496e50d577ca18de8ffab76be85ac729473692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

