---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCBPTCB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSOJD2J3%2Bh8%2BwgfwTDmEc3KpBtAedhqc9%2BRsOpgw63XAiBWCY3es0hYffFFpf1lFiERmsSVCFJQW5rIee7pbhmzbCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH07dNzw18PCn8TpmKtwDanEMlKoAWsGmRA0DXOVrvPqQiXd1uXFQ4Yw4XOu0mfG3JGRFxUmCnjobMM8Ox7qVf07OzKq7Nf7swuB8uu7Qt2hQoAcCUyfCTOGm8WWGLV%2BDa5w00WLIrF0tbLMtSO0IDuZEtnSUHtooGz1ygfSacQ8jXgxT9%2FLvXcp9vWBi2%2FAItjYmtzLMuMXifgG4%2FR8b2xhYIN%2BaObIpgCxVCE8ZjtsZD8W8agYDdB95JKT0eOp2jGoWjteKkYARDjTBnFChJ7VOVaoV4FtzlmaCd43PVua4L6m%2BJDe9WDC4UaNF2e58XuNYXaGvrqVtwtDpm3aPPb6b%2FHsJW1bD5h0%2BBN3XNbmSrdGX9PTOTiaNPB00HIH%2BqJdh8wa99noJdiCFzvqb2tDAp3v5gVZj0NOFcGcnqB%2B1VMLV7J%2Bt39CE7AIf7uag6ZKFAT87gu2r1H6C8TSJPYNe3A2YYofD0S0gWuOzPT8EtaWtg6lhwo1ruMmfjMb3Yb4UfjDQH43BRzbt7p6Tw4batdK%2BZSaoC417cfkA%2BW7Rr%2BQiV960fiLtBoozSrMbBhEYXSGHciHH4BU13%2FNByL5WKHTslICYM77J1GUP3DGmCUKvpdMqplhsxyQD1QeTp4dDMlwPk5Bqqoowia6MygY6pgGNW2lxcb4DcNA3jMFk3uXwwW%2FT%2ByJTW96ks9ybQic%2BWuPo5Td9Ejq%2Bm8nT39WgRPF5MP5YNFflx4WdtGP7uZAiaN65t7BY9%2FY%2F%2FT%2Fw%2BrbPcNl8C%2BadrOtVy5NCJS3N%2Bdix%2BQVeZe%2BQgxH1FCgpihwN9kQqlo0KVuj3S96hJ%2B6PJMncrO8ARZOxL1pJosS0elZvZ2NbEIyTlylExE%2B7I9T43m2Aw3Nd&X-Amz-Signature=4b3026751d9394473a4f1e69056735944dc98602559941815713573b81921394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCBPTCB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSOJD2J3%2Bh8%2BwgfwTDmEc3KpBtAedhqc9%2BRsOpgw63XAiBWCY3es0hYffFFpf1lFiERmsSVCFJQW5rIee7pbhmzbCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH07dNzw18PCn8TpmKtwDanEMlKoAWsGmRA0DXOVrvPqQiXd1uXFQ4Yw4XOu0mfG3JGRFxUmCnjobMM8Ox7qVf07OzKq7Nf7swuB8uu7Qt2hQoAcCUyfCTOGm8WWGLV%2BDa5w00WLIrF0tbLMtSO0IDuZEtnSUHtooGz1ygfSacQ8jXgxT9%2FLvXcp9vWBi2%2FAItjYmtzLMuMXifgG4%2FR8b2xhYIN%2BaObIpgCxVCE8ZjtsZD8W8agYDdB95JKT0eOp2jGoWjteKkYARDjTBnFChJ7VOVaoV4FtzlmaCd43PVua4L6m%2BJDe9WDC4UaNF2e58XuNYXaGvrqVtwtDpm3aPPb6b%2FHsJW1bD5h0%2BBN3XNbmSrdGX9PTOTiaNPB00HIH%2BqJdh8wa99noJdiCFzvqb2tDAp3v5gVZj0NOFcGcnqB%2B1VMLV7J%2Bt39CE7AIf7uag6ZKFAT87gu2r1H6C8TSJPYNe3A2YYofD0S0gWuOzPT8EtaWtg6lhwo1ruMmfjMb3Yb4UfjDQH43BRzbt7p6Tw4batdK%2BZSaoC417cfkA%2BW7Rr%2BQiV960fiLtBoozSrMbBhEYXSGHciHH4BU13%2FNByL5WKHTslICYM77J1GUP3DGmCUKvpdMqplhsxyQD1QeTp4dDMlwPk5Bqqoowia6MygY6pgGNW2lxcb4DcNA3jMFk3uXwwW%2FT%2ByJTW96ks9ybQic%2BWuPo5Td9Ejq%2Bm8nT39WgRPF5MP5YNFflx4WdtGP7uZAiaN65t7BY9%2FY%2F%2FT%2Fw%2BrbPcNl8C%2BadrOtVy5NCJS3N%2Bdix%2BQVeZe%2BQgxH1FCgpihwN9kQqlo0KVuj3S96hJ%2B6PJMncrO8ARZOxL1pJosS0elZvZ2NbEIyTlylExE%2B7I9T43m2Aw3Nd&X-Amz-Signature=b70e5876bde6c1ad75c7d7040ab0f1d515603a9d24fe5590d93f66f0f5c638ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

