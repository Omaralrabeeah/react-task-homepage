const products = [
  {
    name: "Chocalate chips cookies",
    price: "10KD",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBUVFBUYGBcYGh4aHBoZGiAdHB4eIx0aGh4dHh4cICwjGh0pHiEgJDYkKS0vMzMzGiI4PjgyPSwyMy8BCwsLDw4PHhISHjUpIyoyOjQ6Ojo0MjQyNzIyOjI0NDQyMjIyMjI0MjIyMjIyMjIyMjIyMjI6MjIyNTIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAIHAf/EAEIQAAEDAgQDBgMGBAUCBwEAAAECAxEAIQQSMUEFUWEGEyJxgZEyobEjQlLB0fAUcuHxBxUzkrI0YhZDU3OCk7NU/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QALBEAAgICAgEDAwQCAwEAAAAAAAECEQMhEjFBEyJRBDJhcYGRwTNCUrHwI//aAAwDAQACEQMRAD8AcULkrgmdbbGK8wT6Hm0pXEg+oNQ4LHgyD0k+lq14ogNraLaUgqME6Tb614EX5R67W6ZHj2MrgbWdRKVfrWuF4cErDl8yk5VEXNjItyq4MWgBJcSClVpMG/XpVxSEABXhCSRfmaqn8MR67ETtninAAlS0lIMgxCqVcHiwATHzrqPEeCMOH7RKVBWlzp0vahWJ7F4bNLcoiDkCpSociNR6VTHNQTTB+RW4VjWe8Di8wcTopCMyh5xqKchxkLCVBAk7qOVR2nKTI8qF9o8S3hWMjKEocc8PhAmNzPlSzw57Qaq5m5nnVXFZI3QU/cdS4Zj82431/dq1xDxWCnKINri0dKV+CIGHJ7zMZ2PXlTGH8xSMOArQqWqSkdBzP0rM3OC4tjNK7o04b2Yw7RLiW0JVc5oHn6VeTie8zJbTMDKV7X5czUhYKkw4SRFwLDyterWHCUJCQIAHLQU3ZJujMAxkTHIVEMXngXTJMTYwKtJX0pY7YdpG8H3ZVmKlSUoSPigaE7C4vTx64xEW5WzztDxJTbqG0uFBUmbAEwDG9SYDGoc8KHlKKQJMZjM3mRAPSkhOMcxr6XFJAVEJSk2A5TvTRwnDLQ4ptKQpUZiAYA/mNNTjGyvFUN2GIAjbrQHtJ2jGHbWpIlQMe9p9NaN4cEABV7fvzrlX+I7S0vpQSQhQkcjzFDbpCJK3Yc7LcbW464Fud7lukxGYdOVR9rHnMSWzg1FRSTmanKoHnBpY7OYotupKDrEjnR/tDjEJxLLrPxT48vI6i1UcVH3LserLHAO0j7cIdLgOhStJzDy/EKduF8fC7KN9rEfWqGGcUoAi51uL+VE+4DqLiFJMg9R5VJZpN60wZIQraCag24IVz0396xnFDMWykpI0kzI50Lwz6pjQpsqfyqRS+8OsKSbKFasf1S6kZJ4WugzWVWwmIzeFVljXr1FWa1kDKysrK44ysrKyuOOL9nO0XeHIqQsDewI5+dNwxgcQUOAKAj069K41iHRmlJvzpv4JxlxLcupzJ/ENhsDzrxcmBx90Oj14zT1I6AwEJACSR0N7etWUPgJBBsdTt0HSlvhvE0rT8SVDnRbBugn4jA22ms6k7GcEEk41BtAVGtprE4VtfjAykgi1relahXkRF71J3VwoHaqRk3+SbSXWhP4x2MfdcC0ujw2AWNvMVSwHZJ9DiSFtkJOuUkHzuLU+EKM5jaPhH7vUzUAQPPy6VWOV1S0hetgPAdlgAO8dcdPJZ8M+Q2phYSEjKABGwFq8C/ao1r2tHPeu5+RXb0yZPO/QV4VGSCeoFU14oJSSpQA0km2mvSljinbFsFLbSg64bSPhHUnfyFJyv7UFQfkcnXZMJN9KR+2/DmnFtl1RBTNwCYG4gelMuAbUQheYkkXB57xVtSUOAZ0iLi+3MU0W+/IeKjoW+z/DMK42D3aUqSJJEpUepg0c4Oxh21ud0RKoKhmzGY6mdKHf5Y2VqLKi3lUUqETPMdKV+LOKZxRDcJziDlEHLvJ3PWnxpvTZ0lZ0tIn8rfWhnHsA040o4hKVoSCeoi8jlV/DKIaGc6JBJ8hrXN+Ndqy+2402SW1SCo2JG4HTrVWrdIlG7J+EcCwTpUUodQRFlLMibifOjjvCcMlbbSSpKjeImYjfWlnsK2e9cvYpymTN9jfW9OvCV5lqU4E5keEWv5g9aM41V9MpbM7wtqGVJSEmCTvRR/GhCUkaqFkgSfQV5iMG28jIuMxFiLKjzodjOALUAWH1trQIlXin30tUIxadp6BKSl2R8HUe/ccdP+qkBCZ0AB+IHRVacAeOd2FSAs9bTpWvDMWpLbneIGZClgKVcnbXqaucEYSBYkE3PvNdkkpNJeBkqTbDgZQtSXPFKQYy2J6Gp8HjEOAlMggwQdR51WwSyFEbaxUfEMKpCu+aHiHxJ/EP1r0cEriYckakFayoMHi0uoCk77cjyqerkjKysrK445jwbsawNUZiL5lXM+Wgo8jg7URluNiKsLAbRlSbn1n8xXuIxgyHKAIAnkANa8Pb+7s9W966BOP4A1C1pGU7lNreVJuPxzjCyEOZgPxCN/OnNx9Lie8QFQoHS45eQNcyxHD3HMX3bmYkKJneBeI5xeKfHijJ7BKUlpDRw/jGKWglLRUkiMyVfQGr+H7UKsO7cB0IIn86DOYxQSEIMISICTb1tqagZ4ioONJNySQT0if350cmCNXEpbS2OCOMLN0trPkm3zoZjO1jiDBbIi0H9aZOFYhC0CInera8C2oHMkHa4/Ks8Ix/2V/vQJS+NfsIyO2i9e7E/wAxiqeM7WvlSUpypkHz96OcV7GIUoqaV3ZicmqSdRHIUtvdnu6KV4t5DVjlQn7Rxe1kiwHUmvQw48Eulv8AJnnOa7ZHi3FvhKc5UF3MnlqmOc17w/hndvpW4nKn4RvFVOEJjESbpUbCIIE2Nt6blqSJUVCxET+LlUvqJtS4xK44pxtjrwtMJT5V6lMlUAWWfnf86h4S4SgGdaq9qce5hmVutgKEpnpJgmkgrihJam0WEZ86lWgna2giPOap47AtOn7RIVFxa43gUqo7arI0Ek7/AJVNg+LPOELJJBVGlo6U3CSXQ6VjspKVtKQdCnL6RXKney76VqS0ElsKOWTBidOtdGbzFIAzXqRtjIJUCSdgLx+Zoeo0tCqFMU+E9msW2LlCLFYUDJJ5bWpq4FggG57zOonxEiPSNqu8NxbbgISbixB1qUAIOZKbzCgBbzrufJJ3o6UpbTJEpSJBSJTpHKkbjvbdTDxbQ3Ji5XYH0GvnT2U5vEIvvv5Guc/4jcGWQh1tJJbJBgTKT86ZJNq+hI+QirtGl/Chzu/GlYKgkW9frV7geOUSnNbNeNwPLlSb2QCnGnmQCe8ywNIImeotT3wXs6lhAX97LBGYkCNgTehkgm9dlk1GO/IZceIdSCCARAVtOwou0qRS7hnHFuEFQKRaAKPs2tVvpp3J/BlzxpJFVeHQyVuArg6pSJHnVth5K0hSTINSkUEcQcKvOm7Sj4h+E8x0rf0Zew1WVU/zNr8afesogoVOI4dxaSWj9oLjNcKPI8h1rZ/AB+G3HMuQDvEp8IUToBP3aK4dxJBUCI5+VKnHe0KG3WlOSAbJMaE2k9I/KvFT1a2z1FbdDXhm220htAEC39aDcb7OtYhaHCShxJspI16K5iswnG2lBMLlSlZYAmOp5AmjyIjS/wBaEZt/gEo8XYo8Q7JlSWw2u4BzZ9z/ANsbVHhuxxBzKUFG3SIvbzpvVcDYpNepVemc5PXg5tsAo4WtpxKwcqSMpA2M2P5VefxXdryqmDodjzqLtBxpOHKEr0csI50oY3tE66VNq7tIFxAJIM/in5xXek5XxGi/kfkrlNDuNcMaxLYQ4YUboVFwRyoXwbjQWC3EuR8IvNFcK8QEIWUZgPhzSR571L3xf5DxRzQ4ZbOJDZEqCssAazoR0pgf7M4h1aCVIaSDJCjmvtZNp9afGsInNnKRmIAzZRMagTy1q822Li0axV+Tk+S7Jc1FUCuFYJTTaUFwKyjWIJ61ffbC0lJSDmEa2qqtwNrUCmCTYgeGDFp2qVDsm+gIiNTMC8daRSrR0k3sROJdgVla1MuISkmciwfCdwCJt6Vc4P2fxCW3EOhMZYSEqm/4hyn8hTsh0FV7RPsL1C0+LhXhMxY9bEU/qPqzrfwLfDMM7kW24XEiPCSn3M7EUUwuKWlKUuQu8JVIuOZ5GjhVIMajmKq4hhtRhaRJvIEfMUjhW0FZL00RJwqCsrAy8wLTb61YJ1UnkAoHW1DOKcOddAS0+WwNTlk6WIIIih/DFvMZG3VFSinTnHU/rTJKmzq5eQ+FpSR+Ff151bdaSdYI50JbWlZzIJSgHTmYuBV7DIAFiq98pn6bUYS7Qso+SBrDtNKltATmkyE+/rW+OelIyyZMR03NS4nEpCSlIKlaQNuflFe4RoEyq5jU10nekwJ1tm+FwoSJG9EGh8qrmw8qsI0rVggroz5JN7ZKDXi0BQIIkHWsHt516K2kAV/kTP4ayi01lCkG2c84pjf4aSgOKC5BSEzB2IPoKWv4DEYpaXHErKAQZAGZIBmw1mnTDLzBCoBCrGdqJoTukAGINvX9+dePCSj4PTkLHEuDNMIDrZWgBbaVCAcySpMm/nJ8jTUysESD+9q8Xfwm4MyDpQXEcQcGdGHQkhBiVSZ5gRp538q53OWhdtbDaiLdaruveOI29D/WhbeJe1cCTl0LYIMEcib36X6V5jMX4e8SQpJi8EH22NLOEkhoJXsqdt8CXWUrbu40cyRzG4je1KHZ/gzmKWCUltGi1qEA9ETqduQp0wi1umBOUakflR/u0DKBYAC3KNj6zTQyyUaXYZRUWBlNN4RCW22wDIzXuoE65j+tTYfCtd53qUpKinLm1ITNwk+9QYjtHg3Flpf2kSPhzInkNz6UPx2NSlxttuETChaElFgI2JPLaKWfJbOjsdcOZ2NCuN8b7koQlBcddJKUJ1EWvF4rfB4lRbMAyba2F7ny8qQe3DpDreY/aZFNm+wMqMz4dRHMTVcbUqJOFSDK+14SgKcZ8CwopJkyU2NtB4hGtuXNg4NxNtw5S2WlZUqgkEEKmIItoKVMTwd3GNhC3XAW28yQ62U/EDZJEAiwHO9bcA4XisM0lS3E5gkJSAASlu8Rb4hJ2OutWnGNHL4H13EISnMpQATqentpQ9WJaI7xKUqChc6EQJI6HypawOIxHeKbQQoqBltZAm15nTcedaLxaG1lLzK2lJjwkiLgybTm6Gsm32h1GK6Y3t8RSdCdJg6gdf61vil5kZkpzKi0Ky+m/wBKXsBhm0IkLdBWEwpSgogEeFIBsPrRhrh7a1IUpxSktEkJNvFI8RjUjQcr08HemK0lssNJWltKlJiLybkb+KKkZWHE+NIPzHnfSpnMUhJgqv1tIP15VXUyEErQfCSMyeXVPIdKMo8Xa6FTtbNVYEgoykZETYi87QeVWEKN83hFrAzepG3JAKbjeKp8Rw5cA7tyCCCpPMcuhoN0rRydumS4ZaM6sgm/i5eYO9XUKuT6VRwzySSAYKTBH5e1WGVEkgXvr+tHG26S2LkWywgZjrbpW6MQAotwQYsTfMOYrZpvKI9zUeLw3eJiYULpUNQa9PHDhHfZllK2TzW4NU8G+VAhYyrTZQ28xzBq0DVrEN5rK1msoHCo2hDaVJVZJvI2PTrWnBuJJcSYUCpKiDEi2gkHSRes4nhA8nISAU7jZUgClXCunBYxAJzN4g3UBAC48PlvXjLH7bXZ6dp9nQAiw6Uu4LApbcdVELy/DmgZQokL0uokm/pRhnHoM5STBKfUQfXXWoMW2kqKjYkRPTl++dNBqOmK0wHxBAbyqLis1llJV8QH3Y/CLC1LKeMFxxTKbFbhJKfuiAVadZq92mwHeJP2hSEmRa4nYTpUPY7hiUIzeEkmM2pM/U005RUGwwi3JIcsCyGxbSIG5P6HrQHtnxYpwy1NqIIlJi2+Ux11plCwhAUVZQSIM2sYy+Z/Og3avBJxGEfCQUqAJggi4AVp+lZMbqSsrJ6Zzng732rZ2zJkTG432px4iHHEuIZcCkIWTEyQmRoAc2p0kXpD4QgpUkLBlJ0gkm8aC+tPvZ5r7RTi0+MmMpsEgfeJGpJggDpyrdkaSEj0M3BkOIbzuA2RACtYmZUCbeXvFDnRhCVrxAburVwiQbfCbRoNKPKTlTKZOYafvS3vXMeNlwKW6n4UBKD+JIEgyOWbf8qnCNuuhHI6hhy2pII8SRcHMTrexn9zS72y4cttkO4dTiYVLnizQmD4r6QY051X7LcRdzNtqT4VpCtAkgZdIAsBltYc7yKd8RlASlQkK8MeY0NNXF34Fl4EzsPxgu5W3QgwgZCfjIN5kkkg6zzjnTbxPg7b6SHEJJy5QopBI3EHa9U8Ng224CEhQR8Kj8Q9dSPKjaflFcuL6Qs7VMQuJ4H+FdbecccWFrQClJGSUgpT8QISnoIk1t2w7THDJIQkEjL8QgFRkxbUiL018RwyFiFDwkg2vBBBBjzrnX+ICs4Qkg+ByV+UG/lJ+lKopTp9FYu42LD3HH8S53rlsoSBHwiCo2B1JJBrpfBOJZRhyScrqSL28SU5hE6hSbz0NcyQQohKYy8vpTdiQlLeCaC/ifEAG4TvrtH1q+RLi68Bj+TpGHVKioCx3iJtJmvHoSe8GioCunIzyrXh5OUpKTKQfWswbgKMitxHtWW00l87/ck1Tb/9RTxuGKXEuogoUoBadLRGYHfaxq63xFJH2YSEzEyNfIV640FNqbVoRlMa6ajlXP8ABBxoHDIUoupcczR97xSFHYSIPrVoScU6pHKKn3uv+h7VxFcwCPQUN4vx3uVIQo5luSR4oAA1J5CocNwp9UKdcCT+BHP/ALjt6Uhdt2sWlxXeIhByoS4kynKCVZZGhJ2PKhFylKpN/wAjcYLpHTWOIBSAVxfRQOZPlO1URxlJJAUJBg5TypU7FcVIHcqPhOk7Gs420hOJGSwEyoaSPLW9Nlx65RY0Ek2mOP8AnXn86ylj+NXyP+w1lZeU/kpxj8Dc+yowUmFbmNf6xvQh7C96h1tRyiY0um0TfcnTyopieKttkIcWMxBjcxpmIGgmL1YWw24lKpnQyDBI11Go39Kba2Tv5A3DeHpabyIJIFvEfSB0Fqg4hxAITlJJV8hsJ/e9SvuLbUUrBAvlM2I2vz286WONYtGUoEEqNhIlRBm9JfJ7H6B3aTjMIFwZ5bmiXYdBUwlZ+JxalajaUpjlp9aRON5pSDFgqwvp+zXQeAJCcPhwmcyEAi0agFU++nSqZYqOJfLYcbubHHA5ggFyM3KQUgW+e9EXW5hVvCIvoQaAYPiIWAIhYMEDbWb7imNkgjpSY6eieW07FXifDD3veNoSnKORM5o9Npj1rOFIUHAHBBGoPLmefP2pmbROl0/W59iPzqhxbCKAzpCc5MRoVJi8kctfSn4Se0BTS0VOK8RyJyoBKyojTQwTEmNP3NKCeHrcQ+pxRyEHNJspUXA86JsuOulTRmxVmn4ozeEbZZ096OM4YBAGiBByxY669JFdKbXQygmL/ZNh1ALjiClCD4Ux41ADICVEXAtvrQ/FdsHMRiHWwD3QJS2kEoVmAKQorSqYmTAixG9PnEVSws8wQbdK5Z2e4aouuIQnMVlXKQgETr8JKiBJ5GrQkpbYu7HHhKMUlKXSo93mjIIJAHMRF+esm8U24LFZ2woE3MeIAGQdDt/cVpw7DltstzlsYtpOnnA94oLwZDqQ4XW1tqKwEgGQoC+bUpJP0jlXSklG0B+50MKlklUJ9f3HtQri3CA8gpIid5g+97dDRLErASFZdZk7gefOoGHE5ZCsonQ39ht71GU03s6NpWjmWO7JONrlskDcZSqPLc3+tS8D4K4HVPvLKu6EJABCcyranWBv1rqa0eHxQQdfL186HcXaBShtIu4oC28amegH0p3J8WgxlbJMLxJDaE944hJOgKr/ANfIVX4hi0oAdbIUmYUmYgne/wC70p9peGO4dS8alxKwCkNgkymTlNoiBc60R4Xik41rM4Al0C8b8j/Smji5QpPYdKVjVh8VmhWU3EHodfLeh68EE4pakzLmVXMZggImBrZIqHgqiEqbWYKIyk3m8DXe0azRHGLUFNqiDcH5aHlrWfauL7DSUtEWAUczgWrMsQM087+lEcYGy2e8AKMsEHcbzOtCnl5UKWPiUtOmtyPflWcdxiO5jU7DqbRTQk4p/oCULkgcnsvg3JU3LY1Km1QPKDIFSf8AhtLP2jeZwJAISoiZ3J52+tGcBhghGW2mibAWF451eaTKfHoZB5RFPFykqYkpcXoTv8xc/wDSHsK9ot/kDH7UayocZfKL+rA5NguMKUsOLJJKrzeUk3HtT3wzipZ8CzLcZkqF7HQgjVJ+V+tc+4pwZ7DkhSCUA2WBKYB3j4TzmKJ8G4lLYaXoLpO6biU+Wp862zUZR0LD4Z1LKl1JQqSNCbWOttwaVuKcNQ2ogoExZXMazNFOz+KPdpSuQQTcyCUySFXvpHQxVrj/AA/vWjl+IDMmY13F9j+nKsO/kauMtnMeJMMnwlM6mZM79fOmLhbiTh20p0ASJ5CwIJ50j4/FQSN/KL+VGuxeNGdSCdBmv7H8veqyhL07YYtKVDbgFS8drQBtGYn31+VOGHdCUzPwzbnbbrrXP0Yct4gLmRCgB1JH6aU04B+bK0FxbfSfP5VNSppgnHkjMKMXDjra0KDp+zQRGVNxmm0GIO9+etZhsAsN94+ClxvMVwZK0jxBQg+FRiCRredasY3CFLALaVEpHwpVlVEkkpI0WAVRNr8qU8P2kfd7tlY7xD1k5imQmY+0KLpWIvYaiCZrZja4kNthHg+PdccdK+7N03kBZEEBOWIPnMyelHPAEBJ0jnrB51WXw9plJeSicgIgWIFpVG5tzqpxniDZbNylwkFNtVboBje07iZqOSKcvaUTQZLiSlQWPhFgdZ0+dA+D8O/h1KUpwZ1mTAkiVEwdoneaqk4kjMrICQSQZJ6SRab6CaBL7TOMrLbhUC3Kr3zzdIt92g8c1qg3EecLxgnFlgpgZJCiNVeEwOdj9aOKMcomOlcg4Pxsu4xGIBSCVgKBMZUhuFKUNQANxaBcTc9aQQpJIGvKxtP9atKLWiUq7Je7sQQCn5UKxuFyuJyJ8J1E21O37mrxfiQdbRbbT0In5VTx/EA2oKXCcovOpOwA96lKmqOhyTCLJMAQPfT9/lVVxGd1QUmUoCcpOqZ1P0v51Dg+LtkEqVlCbnMCkQOpsfTlWnDsRnlaZhZB66/Kuk9JM5RabZW7aMRgHUATGTKBrZaTIG+9ulIHZ1S2lhRC/DMiDItuIt/SuwqAMWv1v7VA4hKiUjWT6ennVVPj0CE/DAnZ9SnFKeWlKQpICQn1JJG0/lVftjx7+EbQsASteQZtBYmTz0+dMGeABBJm8W/d65t/i2VlGGSE+HMpRPIwAkW5yfapY3ymrfY7d7NOC9o3HXoU4VIAnkM1wLRoNvei+LxKzlDn3ykJMbjnykCkbssAFEk2FvqacV4oOqbTlPdtEKWRqLQlIn7xJ9h1quSK4tFYVVjngFqCQFalMjnpvRJ8hLZnl+VVuG4ZQBUoglQGUfhEaTzrfEDMoBV0nUcokz5VOKcYEJNSkDqyif8AGs/iTWVD0F8lOb+BdaHeFWUgA3OWyb6i9jMzRHh3BmW7oaQkmTOVMydbxvVRrA92pxKASgkXSYKRA00i4J8jRNvEBKJWQEgXJULdZp4XdME+tGuLwwXBiS2Zgb9B9K8SvMrLB031A8qhbxbagVtuBY1IBnmd7gTsfSpmXQtWmvzgT+tJNe78hV0cd7bYPusW4mLK8af/AJXMdJkelBuFvKbcQu4AMHyNjP19K6N/iXw/MGXEplUqQQEySCM1zoAIOsfEa51h2hBS4oym2REZiNiV3EbeEE9RXo4YKWPZKeRxlo6ZhFlxJNiY39wZ2q1gsQJg2IjW8jqeV6VuyfEgD3ahH4YJ+GI3Mmj7eHuSVkEz9IFtNK8vJBwk0/BsjJSVoa8JiiRA0seZiNQNrzbpUDPAGAoqCUlyCApQB35aAzvQnheIKFZSSNwd4O3oTRt51KUlycqrJBmxJgCRznccqbHkdUyWSFPQP4pigMMUHwqKSIAukxHwxcTSH2aS+vFKQ9Ki3mUATKRayuh9Nq6O40258YC4i5Akc/T50O4nwBYX32EUUrCgVtFWVDiYiAY8Ko9DeedaMMqexJURoUMuu976EbfSkTtu19o2ozcEH6iYp7HCXgvMlspB+KbqsI2UR6jnQrivAnHnG05bJMqnwz4duYiw877VrlNJWI1egfwrs8hbLaJIccBkpNwg2gcjE/O1dAwHhCQCrLlAuNLAXm/7NAeG8LU2vMEDNJN1Rl2iJuMsi1qLIwjiFABXgKSLTIUYvBtEVj5t7GcV0bcQ4stuQUiYkEGQpMXER8W8daR+FcUU7jczg1SoISduRAO5g/KnLivCluEEEECPiJTAtcEA3gadKVcb2TxCXEvMp8TZBLa1ACBcZVXmdLxrtT43UrZyqtDEq+v9Kn4C5ldU0fgUA4g8jMKTO4mCOU1VLiQrK5DS4BKHFAH/AOJnKodQan4biEKeSlshRRJP4b2F9/Sr5nHjYqTehnXaOlVG0kKKoIlRm3WRMbVbKZBnU61Sdc+0i9h6aCYrLk1TFhu0iRS5uNeU7XoNxJpt0kOIzIV4L7DedxRLG4pLaCtZAA8hM2Av1oT/ABYgITClqVmMbnNF402NJZWKFLiXZJDC/snFBKlAZTFpPOCSI9etNfBOFoZDeWQBNuajcrM3JIGp61Sxa15pOUhCgDzkj6cvWmNkIUhIJ8YAWDyH0I6daa5SbGdRSCLKsxnb8/yoUt0hYdnwk5CkwLbGZ5nSKmOPytki+XWL7/pVAYdbhCrCFD7MixvIIJ3nWjkk3FJd9iQjTbfXQf8AB+FNeVndp5D515TcpfCJa+WDMRiEApGhUYE6C0yY9KR+IY/v8WlhSh3bcJXlNlKET+nnPKmJnCqdzLIWjMoqB3GoT5iINKmO4G7h3S6tAyqUtWdElElRIBGqLHW4mhilcrZoqtIIcUysFSkQlsjLJ0k2AJ5G0dYO1NPBXgpIUCCDeRfS2tIHEeMJcwrrS05gpEpM3BBsb6gEfIimbsBhnAymRAtBUPi3sJ0y76SelUzQUqknsFtJpk3bjA9622LgJcgjn4THmNKRF8HCb8to9a6V2mfCGZMkZgOZgAk/IVzzieMGTwQVkyLEwCNhtprWe5PSegx41ZQQzlKVCErBBHSef6Uy4PGd9FznSACkHeDBH/aaU33UoaKpKlqzWvMjp150Bb4k6hYUlZFr89ZgjpVF9O8iv4B6vBnXsMwolKpzCDE2UAbxt7dKzE8RWhSBkMpVkiYTmI0UZneeXvQLgnH0OgeOFyZFgRYac0g/Wj3EX21pi/2kSSIhQGx5gCsdOMqlo0PatEnCOLhwutuJyON+ElM5ZIkQduR5TTIlQgZeY/vfWlbgjqUgnL9oVJzqj4iJTfnYDypsaXI00vGlx+9qravRCd1skW+M6hcKgG+mux051A66koUVXSNecc7a+lb4hPeCOXLUGedjAqph+HJDmbOslJgAqsNZHLfXoKdyd62icUq2DWeLoUJU5FwCFWI3An1vzqd7iyFFNlR0ConzgSPLnVl9kBzvAgZVZRJHIG/9a1xq4SoJlYAJAA0IExtrG9r1G6tWW090etYourNylBE3ESPM8x8jRQ5QJKiAkG87RJ+npFJHaPtC4080nwBpSA4FEA5lRokyAIkXsDMVnBuMuvOOobcEXgaJAywBJBMk8to0itEcbS5SZKS5aQ3Yl/DuIT3imlpBkZsqh5ztVPDON58reXKjWI8SjfXlPppW+A4WhsQUoMWNupv0tvW+P4eggZDkUAIUOWkTsPWkycmv0DDinQQZfKonTLvrPInQfWq8iSpRvJHSOkgb/Sq7b3dhKVRmIvf3Oth1pD/xB4+8QltrMhpZ8Tk3XaMqdwjed77amDeSl5Bw4tvwH8bxdOIAU2QptJUArmQSkkdJCr8vOljHcVS1jUQYC2yCdPFaPWJE9a37MFP8IiBAzOQOQzmB7UO4vwJzEKW8kgJbIB5k2Ko8hv58q1uEapj21FUN2aW1LSPCPErfwgbkHUa+tTcexIZbK0uEgJlaUkZkkFJ20kE20JApe4JiVstQpJcUtKklKBnUEkQFZLZgPPca7TcJLKUut90soUhSMy2zmJGgBCcvik8iI1NTxwj22I2w/wAFzIQy+HFL7wXSRAgweUz+lNjZBg9OX70pZw8PLS02o922bq1mBGROlxoaYg4mIEafSTP0qUNSfx/Z09pfP9G+Q/iV7VlDe+VyPuf0rK7kD0wD2V4msjKsyAIm/wC5ppQ6I11tB+gpOwuFKFqFxcQdPXqIplwCVaZTA3nzveoxbi6LTimrNXeAsO5VutIUtN80CZ6kfF5GatNYfIpStrQE6AAGrSfCYCQAfr5af3r0xJJ5x9KrWl+CHJ7FbtniilLCUmApSpAMSMpGp0uRelrheCQ84ZbKUxcjVW0ZjceQ3miHa3EJDpyk5gMljeTmMAbAT8hWvA3G8OltKlkrUbCComSTYJEm51o20lXY6Vl1PZhtCSA2kq1+LxR5mb0ucX4AFBSgyVGbRlVb3uYp+Y4o04S3ckATYXBBvbbUUvdsceWm/gCCQcvUWGu55iutqVeTv1OfY3AMtlMkoIuFJ8J+tzVjhfakt+FagtE/FHivz0Btb03oe/w5TlwJJvPMdI2qqrhJIjIvNMaGJ+s1p4wkqm7BU4u4nQuG8RaWFLSoHMLEWI1iSLixOlMGBxw0FhFzM385vPXmK5IzwZ5DqG0laVKMnKDIFoJ5XplS3xFlUBPeptEHKZkbgAe9ZMn0tP2S/kosviSOl4ZaeajuTN5sPQbR0qROI2kmdTHp6f3rnjXaJ1sFOIaUlUGJMg7yFbmZ0nWvD21QvIG1OBUpBGUHw/eEkajXU1P0cqXQ3sfk6YjEJIAO/Pnp9axSElaUkdRHP4ST79aV+G8bQoyDOggEyQDP3tavvcSyhS8ua+YgCco6c+ZvtSqbeq2B4q2gV2v4c06Gm0qhSlqCDHhsfHPITAtQLsdigznw5aUXg5C/hCZzAfFqBlvcXoxxTFNOthIcKVJzQru1T4gpKhyEhXyFAWcd3LqCBJWLKVZPeCDBCY8VpBJrbDHKePi0xOUYu0zpOHxS5VnABEAwq2k9NKo8R48y2CFHMogjIkzOo5+H1660lOYpxWaVmDcxYb8vM+e9b4XhKlJ7ww02f/McsD/In4l9IEdafH9I/wDZkp5YrpF7GcacfHd/AjZIPKPiVuDytvRRCGnglt1CVIEpgiw5WpXCEoWSlanNpIyJiZsgEmepPpRLDOglJTNjcfWR5VD6jDLG+Uei+OcZKn2EsP2bbZAUlxa2YyhClEZSdFAj2v60Y4TwlptspbkJVmmVZjJJUbqvqa2w68yMuWQbgfPf6HnQtPEO7WpDlgoFJSqIN4tz/Oo+rK031/Y3C1RdwXCUNKV3axeICxqrLFlJ0mOR3qXFK7m6kkAhISRKk75kkkazpz26S4Z0EFKgDpAGoOsD9elEFpDrakLBEzyMbg+c/Sng7/UnP2vfQqsYJxaczZDaRJMKOYqM9ABP0FWkYkthSHCmUAAqkx5wT6ehpgCDlyzJHK1ot1FIXbbDPhpyUK7vXNGx+6eUU3BaZyneg7/4jw//AKiPasrj8orKt6Z2jtneI75TZ8Kjfa4ItAnkNOgow0EpsLyKp4vhrbhLkZXQkpSsE2+KLTfU+9S96QW0n7wMEAm4EmToPWsqtSsWTUlSLXeXAFzy/rVZbkJlUeXrb1rTGY9vDtlbi0oQAPEogST13PSlxjjyMWoFswLlEggKjWOVr3p3bVghGyDjLaUZlgAqhRmL3JOsW3Nq94JwxTaw74FrXl8SiZQkozAD3omvh/eJmCJvB1/tWYriTbIbaUPEdtoAj6R70FJq2kV10EWcIkeJKReTppJk15xnhzeJbU24mQZHkQPiB2INaMcTbKFEEQlN4156c6rPYpa8hbMJnfUgakjaaEZJKxHGTZyrG8DxWGUpLcuAH7vxcx4RrRvg7GMJBRh3GybkqyiNfvTnHL4SdKfVqZZT3jikoCjEqMSbkXOulXMJiG3IUhaVBWhBBFrVX1nXQaa6FfAcAS2tbrjhLiheT4gJNxeYvedfK1M4ZgiwI3Ea8iOt6lewifEbGbHNy0rxCQlspToBHtpSb5bFbtCzjH8M4gqIGRXhUibybCE/uI6UrOcEQkoQ2U5pzgRG8EA+W1aYYF3HLQfhzFYTzUEA39Z870U4o0MiiAAoTMaoUBAIM6SPKrNNx0PCHkN8IYQEApFpg85n5CmAYVBEgfvkeVJPZHixcbKVAlYJ9VA395n1p+ZcvJkSNxpFvqRWRRqTTGnJ0mhNxnDcilDYfT+1DnOEd8g2AbP/AJizlROoKDqtQ1BSIkRIp14hg0FwKKcxiwUZQIOuTRR6mYi0VSxOFKzKiVHr+7V7WP3QTPPk3bSFttbTRCUQ86kAlbqYCdgpLfw3jMFEqg7jQQ4la3FZnFFSuZv/AGq7xXhKrONj7RGg/Ek/Eg9D8iAa1YbCkhQFjz1B3B5EG1HzTCklsHlmsQggyLUTOGrX+G6V1IayfA8RULHy5e1XMYttxPiFtSCJIgGD5ChqMOSoJSCpR0SBJPpy66CrAwq0LQStKYmUJGcm2ilTlSfKfOsWb6O3cS8PqK0z3hrq23EoUoq0gkTbcTuRTC3iMySNCbQQL9Y3tQXIlWoII3Bi9TNLWIJvrB85351hlinDtUXuM+g226BAva5I/MVYSsLTlMXBEESn15/OgRxKQIJI5+En6eWlToxKvuoNoBkxp0ExXRm4glCy3/kzH/8AOx/9QrKi/iHPwD/d/Ssp/UE9N/JiGFuJSXFxb4USlN+YmT/StOM8QRh2VuKjwCQJ1MWSAdSTt1rc8QhINiozCRqdp6X9BXNe1qMYtYceTDYPgSmSkX33zR976UMaUmtjNNdg1xeK4i8kOWgCECUoTA+KFEwY1V/anDg2EQnENttKBQ2FFR52IJ9z7Uif5z3ZyQQSBci8EbTtypv7O4opbSQiVqUVqmAAiIAmZJ6c5rVl1Ho5NK0mOfEeJJabccABCUEjlIkgdNq5khx19S3HHMokkAEgAC+vO4op2r4m4G0tgFOfUcp/oaXS+pKQmSNLc7azQxu1YvGmM+GcSLnEoSoa+GdBeSm6kyN/zo/gcXIzFSVEqCfCbGdI3/Ouarf3KiD7fSmTse4HFrQkFSdAoTM/i6UmaC43Q6aH5zDNuoPeJSqykidL2McuU1bwvD22wkNpyjPmjrHuLbdBWraAEpSRobD9fl7VurE5QPDN9bD29z7VODlVE5fgqcX4h9o2wJT3okqG0X+tqtBIgCNgPPWq2JWC4lZF4yptcE3mfK/oakbgKEGREmDoOZpZS9wVH2nNOL4d3BYwu5SUFQUFDS+qZ29aZVpQ833jYlC/cWFjuKaHkNugoWlKkLsQQCI8jzoQjsiG1lWHecaSdUDxJ9J0+dXhkTVBUuPYodjmu7xjrarCyhtfT6Cuj4JZCQpRJURB9Y20B9KC4DgoZfcKiVqVBnci++gMgmOookXIUlOkkgdRpm1jl8qhkkubY1clQTdQCAQZ5HpUBbq4NPl+dvnWqkV6X0mT/VmDIq2D1sUJxGHDaxI+zWYn8KtvQ6UwPrSgFSyEgbkwP71SfaLqVIy5UEQVLT4j/Kg3Hmr/AGmtkkTUig9hgnXew3JPIAXUegrVGDJuuUJ5CC4fqlA85PQVewASlam4IcCdVHMVo5hR20lIgAnSrpZoVYeQHUISUtgISdY+I/zKN1Gqv8NFMBw4rQ4WjRyYIQ1U6WKu/wALUiGq6g8iqjDg6j9+lTowievv6VOhurLbdJLFCXaX8HerJdMp/wAIOavesol3VZQ9DH/xX8HetP5OY9kXHFLDjis63ElRUdIJSQE8kj8qcsYps5EhSZzQQeYB/fpSA7jFcPLSgCpKfs8oBlSYsoeUCfereO7VNuhpXiEKkyDItrAsfebV4/pyTcvk3uSdIC9oeCziO6SiUBWdBBjIk3WgiLiZiIInoKceBcPyhM3k+0SaAcF4s28paM+VzOrKqfEQTIUAqbgW02p5wLYQlKQTCUgmTfz6nrXZskm1GQYxSVorcd4Ah5vUJUB4VRvr8/0pIxfZVcFSXmiBYmVe8JSd+VdJw72cRcC8WsBP1/Wo1oSDEJBFtNSLT0oxyJK0hafTOUDsk8tVyCAYk2T7HxK9h510XspwNGGbhJBUSMy9ztpsBsNqIBvxgEGBeevl+lEcMgR5/ntFF5JZHXgVpRVi/wBreLfw7aVgeNZACZsYuCTra9I2K4xiVkLW4q+qUqKQBy8P50e/xKWe+w6fuhCyLWJlA+QPzpOKzGsDeDB0An9irxhQ0K42HcBxtyUozEkKATJzQo/iOtxTVwTFlxGYXzSlUaTy6eRrly3oMg6W685p+7CLK2c26lrctbVSv71LNjSVofkmN+HubR+77VfRETmjn9fSlnjPaBGGRMeL7qTz5+VU+HcZcIbcWonNBUJ9T7cqnjVKxXBz6GXioAW2qfxJO2oBn3A968SMy0X+FOaLdee8RQbivEUrLUGfFM3/AAm3rRzCJ8MiZIGvLQUsnc2gVxiiwgyPUjl09K1eK4huJJ+9JAHOB8V9pHnWPOhAlWmp5fudqmwwMXiemlafpn/9EkZ8q9tldGAGYLWStY3O3kNE+gE7zVnJUoFZFesZAXxTBFYC27Ot3SefNJ6Gt8BiQ4gLFtiDqlQ1SaIFNBMan+Gd74D7JyA6PwnZz036eQodbCE8teRUvlVfFYlCB4jfYbn0/PSmASACoXXUg5RKln7iRmV7DQdTAqse8cMHM2n8Kf8AUPmdG/rymrCAW05W0hIOsbnmVaqPW3lS2/ATZAXMFITGozAqHmEzH71r1XEW2xJUJmAJFzIAvyki/WqiE4jOkpCco1GkjeI0okjg7RX3im057X31mNYF723rvBzKmfEfib/2mso3kHKsrrQDhnb74mv5f0oRw/QVlZXlx+xHpL7jbCf9Wx/OP+Kq6yzof3yrKys31Xa/Qrj6YRwnwjyP1qsr/VPn+VZWVN/ahfLJUfEKvs6K9PrXtZVcPZPJ0IX+J/xYT+Zf/EUhYn4T517WVtR2P7Sk/or1rp/ZH/o0fyD/AIisrKln+xBXYtdvf9RPr9E1b4b/AKDfr/yNZWUkfsK4uwkP9Jn/ANxP/JdO+C/00+VZWVB/5GLk+39zFfCf5jVrC/CPT6CsrK0fR/5TNm+wnFe1lZXrGM8NU+Lf6Tn8teVlcwoi4J/07H/tI/4iqGG/6w/zK/8AzFZWUJdHBLh/+knzP1qynWsrKZdALTNT1lZSs4ysrKylOP/Z",
  },
  {
    name: "Cute cookies",
    price: "10KD",
    image:
      "data:image/jpeg;base64,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",
  },
];

const CookieItem = (props) => {
  return (
    <div>
      <img src={props.product.image} alt="" className="product-image"></img>
      <h4>{props.product.name}</h4>
      <h4>{props.product.price}</h4>
    </div>
  );
};
const Cookies = () => {
  const cookiesArray = products.map((product) => {
    return <CookieItem product={product} />;
  });
  return <div className="omar"> {cookiesArray}</div>;
};

export { Cookies };
